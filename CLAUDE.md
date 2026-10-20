@AGENTS.md

# docwellness-website

The public Docwellness marketing and policy site. Next.js 16 (App Router), React 19, TypeScript. Read `AGENTS.md` first: this Next.js version differs from what
models know, so read the relevant guide in `node_modules/next/dist/docs/` before writing code.

## Layout
- `src/app/` pages: about, blog, delete-account, features, health-disclaimer, open, privacy, recipes, support, terms, plus `layout.tsx` and `page.tsx`.
- `src/components` and `src/lib`. Static assets are in `public/`.
- Plans and requirements live in the sibling repo `docwellness-specs` (OpenSpec), not here.

## Commands
- Dev: `npm run dev`. Build: `npm run build`. Start: `npm start`. Lint: `npm run lint`. There is no test suite.

## Verification (run before reporting any task done, and paste the output)
Run these from the repo root. Paste the raw result lines.
- `npm run lint` - baseline today (checked 2026-10-20): **1 existing error**, `react-hooks/set-state-in-effect` in `src/components/open-app.tsx`, so it exits non-zero. A
  change is clean if it adds no problem and none in a file it touched. Do not fix that error as part of another task.
- `npm run build` - healthy: `next build` finishes with no errors and no type errors (not run when this file was written; run it for any TypeScript or route change).
There are no automated tests, so a change that alters a page needs the developer to look at it. If a command cannot run, say which and why instead of reporting done.

## Content and data safety
- The `privacy`, `terms`, `health-disclaimer` and `delete-account` pages are legal and store-policy text, including how a person deletes their account and health data.
  Do not change their wording, promises or dates without the developer's explicit approval; such a change is high risk.
- Do not read `.env.local` or any `.env*` file. Never put a secret in client code: only values meant to be public may reach the browser.
- The backend `.env` database is not production; production runs on Coolify. This site has no database of its own.

## CI
- There is no GitHub workflow in this repo, so local lint and build are the gate.
