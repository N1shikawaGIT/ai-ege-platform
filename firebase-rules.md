# Firebase Security Rules

## Firestore Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Helper functions
    function isAuthenticated() {
      return request.auth != null;
    }

    function isOwner(userId) {
      return request.auth.uid == userId;
    }

    // Users collection
    match /users/{userId} {
      allow read: if isAuthenticated() && isOwner(userId);
      allow create: if isAuthenticated() && isOwner(userId);
      allow update: if isAuthenticated() && isOwner(userId);
      allow delete: if false; // Never allow delete
    }

    // Tests collection
    match /tests/{testId} {
      allow read: if isAuthenticated() && resource.data.userId == request.auth.uid;
      allow create: if isAuthenticated() && request.resource.data.userId == request.auth.uid;
      allow update: if isAuthenticated() && resource.data.userId == request.auth.uid;
      allow delete: if false;
    }

    // Questions collection (read-only for all authenticated users)
    match /questions/{questionId} {
      allow read: if isAuthenticated();
      allow write: if false; // Only admins via Cloud Functions
    }

    // Study plans collection
    match /studyPlans/{planId} {
      allow read: if isAuthenticated() && resource.data.userId == request.auth.uid;
      allow create: if isAuthenticated() && request.resource.data.userId == request.auth.uid;
      allow update: if isAuthenticated() && resource.data.userId == request.auth.uid;
      allow delete: if false;
    }

    // Chat sessions collection
    match /chatSessions/{sessionId} {
      allow read: if isAuthenticated() && resource.data.userId == request.auth.uid;
      allow create: if isAuthenticated() && request.resource.data.userId == request.auth.uid;
      allow update: if isAuthenticated() && resource.data.userId == request.auth.uid;
      allow delete: if isAuthenticated() && resource.data.userId == request.auth.uid;
    }

    // Achievements collection (read-only)
    match /achievements/{achievementId} {
      allow read: if isAuthenticated();
      allow write: if false;
    }
  }
}
```

## Storage Rules

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {

    // User avatars
    match /avatars/{userId}/{fileName} {
      allow read: if true; // Public read
      allow write: if request.auth != null
                   && request.auth.uid == userId
                   && request.resource.size < 2 * 1024 * 1024 // 2MB max
                   && request.resource.contentType.matches('image/.*');
    }

    // Question images (admin only)
    match /questions/{questionId}/{fileName} {
      allow read: if request.auth != null;
      allow write: if false; // Only via Cloud Functions
    }

    // Test results exports
    match /exports/{userId}/{fileName} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow write: if false; // Only via Cloud Functions
    }
  }
}
```

---

Copy these rules to Firebase Console after project setup.
