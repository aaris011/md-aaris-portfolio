# Deploy MD Aaris Portfolio

## Run locally
1. Install Node.js 20+ and Bun (https://bun.sh)
2. In this folder: `bun install`
3. `bun run dev` -> open http://localhost:8080

## Deploy to Cloudflare (free, recommended)
1. `bun install`
2. `bun run build`
3. `npx wrangler login`
4. `npx wrangler deploy --config dist/server/wrangler.json`
Cloudflare prints your live URL.

Or connect this folder's GitHub repo in Cloudflare Workers & Pages with:
- Build command: `bun run build`
- Deploy command: `npx wrangler deploy --config dist/server/wrangler.json`

## Notes
- Keep the `.env` file: it connects the contact form to your message database.
  (If your host asks for environment variables, copy the VITE_* and SUPABASE_* lines from `.env`.)
- Resume + certificates are in `public/files/`. Replace a file with the same name to update it.
- Edit text (bio, projects, skills, certificates) in `src/data/*.ts`.
