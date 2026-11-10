import { useEffect, useRef } from "react";

// A small dot that sticks to the cursor plus a trail of fading points that glide after it.
// Only runs on devices with a real mouse; hidden for touch and reduced-motion users.
const TRAIL = 12;

export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { ...mouse };
    const points = Array.from({ length: TRAIL }, () => ({ ...mouse }));
    let visible = false;
    let hovering = false;
    let raf = 0;

    const setVisible = (v: boolean) => {
      visible = v;
      const o = v ? "1" : "0";
      if (dotRef.current) dotRef.current.style.opacity = o;
      if (ringRef.current) ringRef.current.style.opacity = o;
      trailRefs.current.forEach((el) => el && (el.style.opacity = o));
    };

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!visible) setVisible(true);
      hovering = !!(e.target as Element | null)?.closest?.("a, button, [role='button'], input, textarea, select, label");
    };
    const onLeave = () => setVisible(false);

    const tick = () => {
      ring.x += (mouse.x - ring.x) * 0.18;
      ring.y += (mouse.y - ring.y) * 0.18;
      let prev = mouse;
      points.forEach((p, i) => {
        p.x += (prev.x - p.x) * 0.45;
        p.y += (prev.y - p.y) * 0.45;
        prev = p;
        const el = trailRefs.current[i];
        if (el) el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%) scale(${1 - i / TRAIL})`;
      });
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;
      if (ringRef.current)
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%) scale(${hovering ? 1.8 : 1})`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const base = "pointer-events-none fixed left-0 top-0 z-[100] rounded-full opacity-0 transition-opacity duration-300";

  return (
    <div aria-hidden className="hidden md:block">
      {Array.from({ length: TRAIL }, (_, i) => (
        <div
          key={i}
          ref={(el) => {
            trailRefs.current[i] = el;
          }}
          className={`${base} size-1.5 bg-foreground/30`}
        />
      ))}
      <div ref={ringRef} className={`${base} size-9 border border-foreground/50 [transition:opacity_300ms,width_200ms,height_200ms]`} />
      <div ref={dotRef} className={`${base} size-1.5 bg-foreground`} />
    </div>
  );
}
