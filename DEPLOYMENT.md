# Deployment & CI/CD Guide

## 1. GitHub Repository Setup

### Create repository:

```bash
# Create on GitHub.com or via CLI
gh repo create ai-ege-platform --private --description "AI-платформа для подготовки к ОГЭ/ЕГЭ"

# Push existing code
git remote add origin https://github.com/YOUR_USERNAME/ai-ege-platform.git
git push -u origin main
```

### Branch protection (recommended):

1. Settings → Branches → Add rule
2. Branch name pattern: `main`
3. Enable:
   - ✅ Require pull request before merging
   - ✅ Require status checks (CI must pass)
   - ✅ Require conversation resolution

## 2. Vercel Deployment

### Initial setup:

1. Go to [vercel.com](https://vercel.com/)
2. Sign in with GitHub
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Configure:
   - **Framework**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

### Environment variables (Vercel):

Add these in Project Settings → Environment Variables:

```
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
OPENAI_API_KEY=sk-...
FIREBASE_ADMIN_PROJECT_ID=...
FIREBASE_ADMIN_CLIENT_EMAIL=...
FIREBASE_ADMIN_PRIVATE_KEY=...
```

### Deployment branches:

- `main` → Production (https://ai-ege-platform.vercel.app)
- `develop` → Preview (automatic)
- PR branches → Preview (automatic)

## 3. GitHub Secrets

Add secrets for GitHub Actions:

1. Repository → Settings → Secrets and variables → Actions
2. Add each environment variable as a secret

## 4. CI/CD Workflow

Our setup (`.github/workflows/ci.yml`):

- ✅ Runs on every push/PR to `main` or `develop`
- ✅ Linting (ESLint)
- ✅ Format check (Prettier)
- ✅ Type check (TypeScript)
- ✅ Build test

Vercel automatically deploys after CI passes.

## 5. Domain Setup (later)

After registering domain (e.g., egemate.ru):

1. Vercel → Project Settings → Domains
2. Add custom domain
3. Configure DNS records (Vercel provides instructions)
4. Enable automatic HTTPS

## 6. Monitoring (Phase 2+)

- Vercel Analytics (built-in)
- Firebase Performance Monitoring
- Sentry for error tracking (optional)

---

**Current status**: CI pipeline configured, manual deployment setup required
**Next steps**: Push to GitHub, connect Vercel
