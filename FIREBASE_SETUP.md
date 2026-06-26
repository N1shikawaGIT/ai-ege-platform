# Firebase Configuration Guide

## 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Project name: `ai-ege-platform` (or your choice)
4. Enable Google Analytics (optional but recommended)
5. Create project

## 2. Enable Authentication

1. In Firebase Console → Authentication
2. Click "Get started"
3. Enable sign-in methods:
   - ✅ Email/Password
   - ✅ Google
4. Add authorized domains (later, after deployment)

## 3. Create Firestore Database

1. In Firebase Console → Firestore Database
2. Click "Create database"
3. Start in **production mode** (we'll add custom rules)
4. Choose location: `europe-west` (closest to Russia)

## 4. Enable Storage

1. In Firebase Console → Storage
2. Click "Get started"
3. Start in **production mode**
4. Use same location as Firestore

## 5. Enable Cloud Messaging (for push notifications)

1. In Firebase Console → Cloud Messaging
2. Click "Get started"
3. No additional setup needed now

## 6. Get Configuration

1. Project Settings → General
2. Scroll to "Your apps"
3. Click web icon (</>) to add web app
4. Register app name: `ai-ege-platform-web`
5. Copy the config object

## 7. Create `.env.local` file

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

# Firebase Admin (for server-side)
FIREBASE_ADMIN_PROJECT_ID=your-project-id
FIREBASE_ADMIN_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# OpenAI
OPENAI_API_KEY=sk-...
```

## 8. Firestore Security Rules (to add later)

See `ARCHITECTURE.md` for complete security rules.

## 9. Next Steps

- Get service account key for Firebase Admin SDK
- Configure Firestore indexes (will be auto-generated on first query)
- Setup Cloud Functions (Phase 2)

---

**Status**: Manual setup required
**Estimated time**: 15-20 minutes
