# 🏗️ Архитектура проекта

**Проект**: AI-платформа для подготовки к ОГЭ/ЕГЭ  
**Версия**: 1.0  
**Дата**: 26.06.2026

---

## 📐 Общая архитектура системы

```
┌─────────────────────────────────────────────────────────────┐
│                         FRONTEND                             │
├──────────────────────┬──────────────────────────────────────┤
│   Web (Next.js)      │     Mobile (Flutter)                 │
│   - Landing          │     - iOS App                        │
│   - Dashboard        │     - Android App                    │
│   - Tests            │     - Offline mode                   │
│   - AI Chat          │     - Native features                │
└──────────────────────┴──────────────────────────────────────┘
                            ↓ HTTPS/WSS
┌─────────────────────────────────────────────────────────────┐
│                    API LAYER / BACKEND                       │
├─────────────────────────────────────────────────────────────┤
│  Firebase Services:                                          │
│  - Authentication (Email, Google, Apple)                     │
│  - Firestore (NoSQL Database)                                │
│  - Cloud Functions (Serverless)                              │
│  - Cloud Storage (Files, Images)                             │
│  - Cloud Messaging (Push)                                    │
│  - Analytics                                                 │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                      AI LAYER                                │
├─────────────────────────────────────────────────────────────┤
│  OpenAI API:                                                 │
│  - GPT-4 Turbo (reasoning & explanations)                    │
│  - Text Embeddings (RAG)                                     │
│                                                              │
│  Vector Database:                                            │
│  - Pinecone / Supabase Vector                                │
│  - Хранение эмбеддингов заданий ЕГЭ                         │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                  EXTERNAL SERVICES                           │
├─────────────────────────────────────────────────────────────┤
│  - Payment: Stripe, ЮKassa                                   │
│  - Monitoring: Sentry                                        │
│  - Analytics: Mixpanel, GA4                                  │
│  - Email: SendGrid / Firebase Email                          │
└─────────────────────────────────────────────────────────────┘
```

---

## 🌐 Web Frontend Architecture

### Технологии
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS 3+ + Shadcn/ui
- **State Management**: Zustand / Jotai (легковесные)
- **Data Fetching**: TanStack Query (React Query)
- **Forms**: React Hook Form + Zod
- **Authentication**: Firebase Auth SDK
- **AI Integration**: OpenAI SDK / REST API

### Структура папок

```
web/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Auth layout group
│   │   ├── login/
│   │   ├── register/
│   │   └── reset-password/
│   ├── (dashboard)/              # Protected routes
│   │   ├── layout.tsx            # Dashboard layout
│   │   ├── page.tsx              # Main dashboard
│   │   ├── test/
│   │   │   ├── [id]/             # Dynamic test route
│   │   │   └── results/
│   │   ├── chat/                 # AI chat
│   │   ├── progress/             # Stats & analytics
│   │   ├── plan/                 # Study plan
│   │   └── profile/
│   ├── (marketing)/              # Public pages
│   │   ├── page.tsx              # Landing
│   │   ├── about/
│   │   ├── pricing/
│   │   └── faq/
│   ├── api/                      # API routes
│   │   ├── ai/
│   │   │   ├── explain/
│   │   │   ├── chat/
│   │   │   └── plan/
│   │   └── webhook/
│   ├── layout.tsx                # Root layout
│   └── globals.css
│
├── components/
│   ├── ui/                       # Shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── ...
│   ├── layouts/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Sidebar.tsx
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   └── RegisterForm.tsx
│   ├── test/
│   │   ├── Question.tsx
│   │   ├── QuestionNav.tsx
│   │   ├── Timer.tsx
│   │   └── ProgressBar.tsx
│   ├── ai/
│   │   ├── ExplanationCard.tsx
│   │   ├── ChatInterface.tsx
│   │   └── StudyPlanView.tsx
│   └── dashboard/
│       ├── StatsOverview.tsx
│       ├── WeakTopics.tsx
│       └── ProgressChart.tsx
│
├── lib/
│   ├── firebase/
│   │   ├── config.ts             # Firebase initialization
│   │   ├── auth.ts               # Auth helpers
│   │   ├── firestore.ts          # DB helpers
│   │   └── storage.ts            # Storage helpers
│   ├── openai/
│   │   ├── client.ts             # OpenAI client
│   │   ├── prompts.ts            # Prompt templates
│   │   └── streaming.ts          # Streaming helpers
│   ├── db/
│   │   ├── users.ts              # User CRUD
│   │   ├── tests.ts              # Tests CRUD
│   │   ├── questions.ts          # Questions CRUD
│   │   └── progress.ts           # Progress tracking
│   ├── utils.ts                  # Generic utilities
│   └── constants.ts              # App constants
│
├── hooks/
│   ├── useAuth.ts                # Auth state hook
│   ├── useTest.ts                # Test logic hook
│   ├── useAI.ts                  # AI interactions hook
│   └── useProgress.ts            # Progress tracking hook
│
├── stores/                       # Zustand stores
│   ├── authStore.ts
│   ├── testStore.ts
│   └── uiStore.ts
│
├── types/
│   ├── user.ts
│   ├── test.ts
│   ├── question.ts
│   └── ai.ts
│
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
└── __tests__/
    ├── unit/
    ├── integration/
    └── e2e/
```

### Ключевые паттерны

1. **Composition over Configuration**
   - Мелкие переиспользуемые компоненты
   - React Server Components где возможно

2. **Server Actions для мутаций**
   - Формы через Server Actions
   - Оптимистичные обновления

3. **Streaming для AI**
   - SSE (Server-Sent Events) для стриминга ответов
   - Прогрессивный рендеринг

---

## 📱 Mobile Architecture (Flutter)

### Технологии
- **Framework**: Flutter 3.x
- **Language**: Dart 3+
- **State Management**: Riverpod 2.x
- **Routing**: Go Router
- **HTTP**: Dio
- **Local Storage**: Hive / SQLite
- **Push**: Firebase Cloud Messaging

### Структура папок

```
mobile/
├── lib/
│   ├── main.dart
│   ├── app.dart                  # Root App widget
│   │
│   ├── core/
│   │   ├── config/
│   │   │   ├── firebase_config.dart
│   │   │   └── api_config.dart
│   │   ├── constants/
│   │   ├── theme/
│   │   │   ├── app_theme.dart
│   │   │   ├── colors.dart
│   │   │   └── typography.dart
│   │   ├── utils/
│   │   └── errors/
│   │
│   ├── features/
│   │   ├── auth/
│   │   │   ├── data/
│   │   │   │   ├── models/
│   │   │   │   ├── datasources/
│   │   │   │   └── repositories/
│   │   │   ├── domain/
│   │   │   │   ├── entities/
│   │   │   │   ├── repositories/
│   │   │   │   └── usecases/
│   │   │   └── presentation/
│   │   │       ├── providers/
│   │   │       ├── pages/
│   │   │       └── widgets/
│   │   │
│   │   ├── test/
│   │   │   ├── data/
│   │   │   ├── domain/
│   │   │   └── presentation/
│   │   │
│   │   ├── ai_chat/
│   │   ├── dashboard/
│   │   ├── profile/
│   │   └── progress/
│   │
│   ├── shared/
│   │   ├── widgets/            # Общие виджеты
│   │   │   ├── buttons/
│   │   │   ├── cards/
│   │   │   ├── inputs/
│   │   │   └── loaders/
│   │   ├── providers/          # Глобальные провайдеры
│   │   └── services/           # Сервисы
│   │
│   └── routes/
│       └── app_router.dart
│
├── test/
│   ├── unit/
│   ├── widget/
│   └── integration/
│
└── assets/
    ├── images/
    ├── icons/
    └── fonts/
```

### Clean Architecture

```
Presentation Layer (UI)
        ↓
Domain Layer (Business Logic)
        ↓
Data Layer (Repositories, APIs)
```

---

## 🗄️ Database Schema (Firestore)

### Collections

#### **users**
```typescript
{
  uid: string;                    // Firebase Auth UID
  email: string;
  displayName: string;
  avatarUrl?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  
  // Profile
  grade: 9 | 10 | 11;             // Класс
  examType: "ОГЭ" | "ЕГЭ";
  subjects: string[];             // ["математика_проф", "русский"]
  targetScore: number;            // Целевой балл
  
  // Subscription
  subscription: {
    plan: "free" | "basic" | "premium";
    status: "active" | "canceled" | "expired";
    startDate?: Timestamp;
    endDate?: Timestamp;
  };
  
  // Settings
  settings: {
    notifications: boolean;
    dailyGoal: number;            // Заданий в день
    reminderTime?: string;        // "18:00"
    theme: "light" | "dark" | "auto";
  };
  
  // Stats
  stats: {
    totalTests: number;
    totalQuestions: number;
    correctAnswers: number;
    streak: number;               // Дней подряд
    level: number;                // Уровень (1-50)
    xp: number;
  };
}
```

#### **tests**
```typescript
{
  id: string;
  userId: string;                 // Ref to users
  type: "diagnostic" | "practice" | "exam" | "topic";
  subject: string;                // "математика_проф"
  
  // Test metadata
  startedAt: Timestamp;
  completedAt?: Timestamp;
  duration?: number;              // Секунд
  
  // Questions
  questions: {
    questionId: string;
    userAnswer?: string | number;
    isCorrect?: boolean;
    timeSpent?: number;           // Секунд на вопрос
    aiExplanationShown?: boolean;
  }[];
  
  // Results
  score?: number;                 // % или балл
  totalQuestions: number;
  correctAnswers: number;
  
  // Analysis
  weakTopics?: string[];          // ["тригонометрия", "производные"]
  strongTopics?: string[];
  
  status: "in_progress" | "completed" | "abandoned";
}
```

#### **questions**
```typescript
{
  id: string;
  subject: string;                // "математика_проф"
  examType: "ОГЭ" | "ЕГЭ";
  
  // Content
  number: number;                 // Номер задания (1-19 для профиля)
  topic: string;                  // "Производные"
  subtopic?: string;              // "Производная сложной функции"
  difficulty: 1 | 2 | 3 | 4 | 5;
  
  // Question data
  text: string;                   // Текст задания
  imageUrl?: string;              // Картинка если есть
  
  // Answer
  answerType: "number" | "text" | "select";
  correctAnswer: string | number;
  
  // Solution (для части 2)
  solution?: {
    steps: string[];
    explanation: string;
    hints?: string[];
  };
  
  // Metadata
  fipiCode?: string;              // Код ФИПИ
  year?: number;                  // Год экзамена
  isOfficial: boolean;            // Официальное задание или составное
  
  // Embeddings (для RAG)
  embedding?: number[];           // Vector embedding
  
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

#### **studyPlans**
```typescript
{
  id: string;
  userId: string;
  subject: string;
  
  // Plan metadata
  createdAt: Timestamp;
  targetDate: Timestamp;          // Дата экзамена
  currentLevel: number;           // 0-100
  targetScore: number;
  
  // Weekly plan
  weeks: {
    weekNumber: number;
    topics: {
      topic: string;
      daysAllocated: number;
      questionsToSolve: number;
      status: "pending" | "in_progress" | "completed";
    }[];
  }[];
  
  // Daily tasks
  dailyTasks: {
    date: string;                 // "2026-06-26"
    tasks: {
      topic: string;
      questionsCount: number;
      completed: number;
      estimatedTime: number;      // Минут
    }[];
  }[];
  
  // AI generated
  aiRecommendations?: string;
  
  lastUpdated: Timestamp;
}
```

#### **chatSessions**
```typescript
{
  id: string;
  userId: string;
  
  // Session info
  title?: string;                 // Auto-generated or custom
  createdAt: Timestamp;
  lastMessageAt: Timestamp;
  
  // Messages
  messages: {
    id: string;
    role: "user" | "assistant";
    content: string;
    timestamp: Timestamp;
    
    // Context
    relatedQuestionId?: string;   // Если обсуждается конкретное задание
    relatedTestId?: string;
  }[];
  
  // Metadata
  messageCount: number;
  tokensUsed?: number;            // Для аналитики стоимости
}
```

#### **achievements**
```typescript
{
  id: string;
  userId: string;
  
  type: "streak" | "test_completion" | "score" | "topic_mastery" | "special";
  
  // Achievement data
  name: string;
  description: string;
  iconUrl: string;
  
  // Progress
  unlockedAt?: Timestamp;
  isUnlocked: boolean;
  
  // Requirements
  requirement: {
    type: "streak" | "tests" | "questions" | "score";
    target: number;
    current: number;
  };
}
```

#### **analytics** (subcollection under users)
```typescript
users/{userId}/analytics/{date}
{
  date: string;                   // "2026-06-26"
  
  // Daily stats
  sessionsCount: number;
  totalTime: number;              // Секунд
  questionsAttempted: number;
  questionsCorrect: number;
  testsCompleted: number;
  
  // AI usage
  aiExplanationsViewed: number;
  chatMessagesCount: number;
  
  // Topics studied
  topicsStudied: string[];
}
```

---

## 🤖 AI Architecture

### RAG (Retrieval-Augmented Generation) Flow

```
1. User Question
      ↓
2. Generate Embedding (OpenAI text-embedding-3)
      ↓
3. Vector Search (Pinecone/Supabase)
      ↓ Top 5 similar questions
4. Build Context
      ↓
5. Send to GPT-4 with Context + System Prompt
      ↓
6. Stream Response
      ↓
7. Display to User
```

### AI Functions

#### 1. **Объяснение ошибок**
```typescript
Input:
- Question text
- Correct answer
- User answer
- Topic

Prompt Template:
"""
Ты опытный репетитор по подготовке к ЕГЭ.

Задание: {questionText}
Правильный ответ: {correctAnswer}
Ответ ученика: {userAnswer}
Тема: {topic}

Объясни ошибку простым языком:
1. Где именно ошибка
2. Почему это неправильно
3. Как решать правильно (пошагово)
4. Что повторить по этой теме

Пиши дружелюбно, без профессионального жаргона.
"""

Output:
- Structured explanation
```

#### 2. **Генерация учебного плана**
```typescript
Input:
- Current level (from diagnostic)
- Weak topics
- Target score
- Days until exam
- Daily study time

Prompt Template:
"""
Создай персональный план подготовки к ЕГЭ.

Текущий уровень: {currentLevel}/100
Слабые темы: {weakTopics}
Цель: {targetScore} баллов
Времени до экзамена: {daysLeft} дней
Ежедневно: {dailyMinutes} минут

Построй недельный план:
- Приоритизируй слабые темы
- Учитывай время
- Включи повторение
- Добавь тесты для проверки

Формат: JSON
"""

Output:
- Weekly plan JSON
```

#### 3. **AI Репетитор (Chat)**
```typescript
System Prompt:
"""
Ты AI-репетитор по подготовке к ЕГЭ/ОГЭ.

Контекст ученика:
- Класс: {grade}
- Предмет: {subject}
- Слабые темы: {weakTopics}
- Текущий уровень: {level}

Правила:
1. Не давай готовые ответы, веди к решению
2. Задавай наводящие вопросы
3. Объясняй через примеры
4. Используй простой язык
5. Хвали за прогресс
6. Если не знаешь - признайся честно

Твоя цель - помочь ученику понять, а не просто решить.
"""
```

### Caching Strategy

```typescript
// Cache OpenAI responses
const cacheKey = `ai:${type}:${hash(input)}`;

// 1. Check cache (Redis/Firestore)
const cached = await cache.get(cacheKey);
if (cached) return cached;

// 2. Call OpenAI
const response = await openai.chat.completions.create(...);

// 3. Cache result (TTL: 7 days for explanations)
await cache.set(cacheKey, response, { ttl: 604800 });

return response;
```

---

## 🔐 Security

### Authentication Flow

```
1. User enters email/password or clicks Google
      ↓
2. Firebase Auth handles authentication
      ↓
3. Get ID Token
      ↓
4. Store in httpOnly cookie (web) / Secure Storage (mobile)
      ↓
5. Include in Authorization header for API calls
      ↓
6. Verify token on server (Firebase Admin SDK)
```

### Firestore Security Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Users
    match /users/{userId} {
      allow read: if request.auth.uid == userId;
      allow write: if request.auth.uid == userId;
      
      // Analytics subcollection
      match /analytics/{document=**} {
        allow read, write: if request.auth.uid == userId;
      }
    }
    
    // Tests - users can only access their own
    match /tests/{testId} {
      allow read, write: if request.auth != null 
        && resource.data.userId == request.auth.uid;
    }
    
    // Questions - read-only for authenticated users
    match /questions/{questionId} {
      allow read: if request.auth != null;
      allow write: if false; // Only admins via Cloud Functions
    }
    
    // Study Plans
    match /studyPlans/{planId} {
      allow read, write: if request.auth != null
        && resource.data.userId == request.auth.uid;
    }
    
    // Chat Sessions
    match /chatSessions/{sessionId} {
      allow read, write: if request.auth != null
        && resource.data.userId == request.auth.uid;
    }
  }
}
```

### API Rate Limiting

```typescript
// Free tier limits
const RATE_LIMITS = {
  free: {
    aiExplanations: 10,        // per day
    chatMessages: 20,          // per day
    testsPerDay: 3,
  },
  basic: {
    aiExplanations: 50,
    chatMessages: 100,
    testsPerDay: 10,
  },
  premium: {
    aiExplanations: Infinity,
    chatMessages: Infinity,
    testsPerDay: Infinity,
  },
};
```

---

## 📊 Monitoring & Analytics

### Events to Track

```typescript
// Firebase Analytics / Mixpanel
enum AnalyticsEvent {
  // Auth
  SIGN_UP = "sign_up",
  LOGIN = "login",
  LOGOUT = "logout",
  
  // Onboarding
  ONBOARDING_STARTED = "onboarding_started",
  ONBOARDING_COMPLETED = "onboarding_completed",
  EXAM_SELECTED = "exam_selected",
  SUBJECT_SELECTED = "subject_selected",
  
  // Tests
  TEST_STARTED = "test_started",
  TEST_COMPLETED = "test_completed",
  TEST_ABANDONED = "test_abandoned",
  QUESTION_ANSWERED = "question_answered",
  
  // AI
  AI_EXPLANATION_VIEWED = "ai_explanation_viewed",
  AI_CHAT_STARTED = "ai_chat_started",
  AI_CHAT_MESSAGE_SENT = "ai_chat_message_sent",
  STUDY_PLAN_GENERATED = "study_plan_generated",
  
  // Engagement
  DAILY_GOAL_COMPLETED = "daily_goal_completed",
  STREAK_MILESTONE = "streak_milestone",
  ACHIEVEMENT_UNLOCKED = "achievement_unlocked",
  
  // Monetization
  PAYWALL_VIEWED = "paywall_viewed",
  SUBSCRIPTION_STARTED = "subscription_started",
  SUBSCRIPTION_CANCELED = "subscription_canceled",
}
```

### Error Tracking (Sentry)

```typescript
// Initialize Sentry
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  
  // Performance monitoring
  tracesSampleRate: 0.1,
  
  // Custom tags
  beforeSend(event, hint) {
    // Add user context
    if (user) {
      event.user = {
        id: user.uid,
        subscription: user.subscription.plan,
      };
    }
    return event;
  },
});
```

---

## 🚀 Deployment

### Web (Vercel)

```yaml
# vercel.json
{
  "framework": "nextjs",
  "buildCommand": "pnpm build",
  "outputDirectory": ".next",
  "env": {
    "NEXT_PUBLIC_FIREBASE_API_KEY": "@firebase-api-key",
    "OPENAI_API_KEY": "@openai-api-key"
  },
  "regions": ["fra1"],  # Frankfurt (ближе к России)
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "/api/:path*"
    }
  ]
}
```

### Mobile (App Store / Google Play)

```yaml
# Fastlane configuration
default_platform(:ios)

platform :ios do
  desc "Build and upload to TestFlight"
  lane :beta do
    increment_build_number
    build_app(scheme: "Runner")
    upload_to_testflight
  end
end

platform :android do
  desc "Build and upload to Play Console"
  lane :beta do
    increment_version_code
    build_app(gradle: "bundleRelease")
    upload_to_play_store(track: "beta")
  end
end
```

---

## 📦 Dependencies

### Web (package.json)
```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "typescript": "^5.4.0",
    "firebase": "^10.12.0",
    "openai": "^4.47.0",
    "@tanstack/react-query": "^5.40.0",
    "zustand": "^4.5.0",
    "react-hook-form": "^7.51.0",
    "zod": "^3.23.0",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^11.2.0",
    "recharts": "^2.12.0"
  },
  "devDependencies": {
    "@testing-library/react": "^15.0.0",
    "playwright": "^1.44.0",
    "eslint": "^8.57.0",
    "prettier": "^3.2.0"
  }
}
```

### Mobile (pubspec.yaml)
```yaml
dependencies:
  flutter:
    sdk: flutter
  
  # State Management
  flutter_riverpod: ^2.5.0
  
  # Firebase
  firebase_core: ^2.31.0
  firebase_auth: ^4.19.0
  cloud_firestore: ^4.17.0
  firebase_storage: ^11.7.0
  firebase_messaging: ^14.9.0
  
  # HTTP & API
  dio: ^5.4.0
  
  # Local Storage
  hive: ^2.2.3
  hive_flutter: ^1.1.0
  
  # Routing
  go_router: ^14.0.0
  
  # UI
  flutter_svg: ^2.0.10
  cached_network_image: ^3.3.1
```

---

**Автор**: AI-assistant  
**Последнее обновление**: 26.06.2026
