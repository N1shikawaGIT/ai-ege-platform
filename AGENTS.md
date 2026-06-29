# AGENTS.md

Working notes for future agents and maintainers.

## Project Summary

This repository is an AI exam-prep platform for OGE/EGE students. The intended product is a Next.js web app with Firebase auth/database/storage and OpenAI-powered tutoring features.

Current state: Phase 0 preparation is mostly documented. The repository has project docs, HTML prototypes, development tooling, prompts, content text, and a small question bank. It does not yet contain a working Next.js application because there is no `app/`, `pages/`, or `src/` implementation directory.

## Primary Documents

- `TASKS.md` - task list in intended execution order.
- `ROADMAP.md` - phased product roadmap.
- `ARCHITECTURE.md` - target architecture and future folder structure.
- `DESIGN_SYSTEM.md` - colors, typography, spacing, components.
- `USER_FLOW.md` - product flows and screen transitions.
- `AI_PROMPTS.md` - prompt templates for explanations, plans, and tutor chat.
- `CONTENT_TEXTS.md` - landing, onboarding, FAQ, policy, and terms copy.
- `questions_math_base.json` - 20 base math questions for diagnostics.

## Current Implementation Assets

- `prototypes/` contains static HTML prototypes:
  - `landing.html`
  - `auth.html`
  - `onboarding.html`
  - `test.html`
  - `results.html`
  - `dashboard.html`
  - `chat.html`
  - `profile.html`
  - `index.html`
- Tooling exists in `package.json`, `tsconfig.json`, `.eslintrc.json`, `.prettierrc`, `tailwind.config.js`, `.husky/`, and `.github/workflows/ci.yml`.
- Setup guides exist for Firebase, OpenAI, and deployment:
  - `FIREBASE_SETUP.md`
  - `OPENAI_SETUP.md`
  - `DEPLOYMENT.md`
  - `firebase-rules.md`

## Important Status Notes

- Local Git is initialized on branch `main`.
- No Git remote is configured yet.
- `npm install` has already been run and `node_modules/` exists locally, but it is ignored by Git.
- `npm run build`, `npm run lint`, and `npm run type-check` currently fail because there is no Next.js `app/` or `pages/` directory and no TypeScript source files.
- `.next/` may exist from failed build attempts and should remain ignored.

## Recommended Next Step

Start Phase 1 by creating the real Next.js App Router structure:

1. Add `app/layout.tsx`, `app/page.tsx`, and `app/globals.css`.
2. Add `postcss.config.js` if missing.
3. Add `tailwindcss-animate` to dependencies or remove it from `tailwind.config.js`.
4. Port `prototypes/landing.html` into the first React/Tailwind landing page.
5. Make `npm run type-check`, `npm run lint`, and `npm run build` pass.

After that, continue converting prototypes in this order:

1. Auth
2. Onboarding
3. Diagnostic test
4. Results
5. Dashboard
6. Chat
7. Profile

## Development Commands

```bash
npm run dev
npm run build
npm run lint
npm run type-check
npm run format:check
```

Expected current result before Phase 1 implementation: build/lint/type-check fail due to missing app source.

## Git Workflow

Use small conventional commits:

```bash
git status --short
git add <files>
git commit -m "type: short summary"
```

Examples:

```bash
git commit -m "docs: add agent working notes"
git commit -m "feat: add landing page"
git commit -m "chore: initialize app router"
```

Before committing app code, run the relevant checks. For documentation-only changes, a Git status check is usually enough.

## Coding Guidance

- Prefer the existing product direction: Next.js 14 App Router, TypeScript, Tailwind CSS, Firebase, OpenAI.
- Reuse the static prototypes as visual and flow references, but implement screens as real React components.
- Keep implementation close to `ARCHITECTURE.md` unless there is a clear reason to simplify.
- Keep UI consistent with `DESIGN_SYSTEM.md`.
- Do not commit secrets. Use `.env.local` for Firebase/OpenAI keys.
- Do not remove or overwrite existing documentation unless the task explicitly asks for it.

## Manual Setup Still Needed

- Create/connect GitHub repository and set `origin`.
- Configure branch protection in GitHub.
- Create Firebase project and add environment variables.
- Create OpenAI API key and add `OPENAI_API_KEY`.
- Connect Vercel after the Next.js app can build.
## Session Continuity

- Keep this file updated with meaningful progress after each working session: setup changes, decisions, blockers, and verified next steps.
- At the start of a new session, read `AGENTS.md` first before making assumptions about project state.
- The latest local/GitHub setup completed in this chat: Git 2.54.0 and GitHub CLI 2.95.0 were installed, GitHub CLI was authenticated as `N1shikawaGIT`, Git user config was set to `N1shikawaGIT <297624683+N1shikawaGIT@users.noreply.github.com>`, and GitHub CLI was configured as the HTTPS credential helper.
- Repository review completed: the repo currently contains documentation, HTML prototypes, config files, setup guides, assets, and a 20-question math base JSON bank, but no real Next.js `app/`, `pages/`, or `src/` implementation yet.
- Trial prototype links found: GitHub Pages is not enabled and there are no deployments; use `https://htmlpreview.github.io/?https://github.com/N1shikawaGIT/ai-ege-platform/blob/main/prototypes/index.html` for the prototype index and `https://htmlpreview.github.io/?https://github.com/N1shikawaGIT/ai-ege-platform/blob/main/prototypes/landing.html` for the landing prototype.
- Added `КонтентСаня.md` with detailed content requirements for all 29 final app pages: page purpose, visible content blocks, actions, and motivational role.
