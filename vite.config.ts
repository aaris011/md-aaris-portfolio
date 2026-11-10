
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin-tanstack-start";

export default defineConfig({
  // Netlify's plugin handles the deployment integration.
  nitro: false,

  // The wrapper adds these after its internal plugins.
  plugins: [netlify()],

  // Preserve your existing custom SSR server entry.
  tanstackStart: {
    server: { entry: "server" },
  },
});
