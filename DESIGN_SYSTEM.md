# 🎨 Дизайн-система проекта

**Стиль**: По мотивам Т-банка  
**Дата**: 26.06.2026

---

## 🎨 Цветовая палитра

### Основные цвета (Primary)

```css
/* Жёлтый Т-банка */
--primary-50: #FFFBEB;
--primary-100: #FFF3C1;
--primary-200: #FFED72;
--primary-300: #FFE600;  /* Основной жёлтый Т-банка */
--primary-400: #FFDD00;
--primary-500: #F5C400;
--primary-600: #D69E00;
--primary-700: #B17900;
--primary-800: #8F5E00;
--primary-900: #764D00;

/* Для Tailwind */
primary: {
  50: '#FFFBEB',
  100: '#FFF3C1',
  200: '#FFED72',
  300: '#FFE600',
  400: '#FFDD00',
  500: '#F5C400',
  600: '#D69E00',
  700: '#B17900',
  800: '#8F5E00',
  900: '#764D00',
}
```

### Чёрный и серый (Neutrals)

```css
/* Т-банк использует тёплые оттенки серого */
--neutral-0: #FFFFFF;
--neutral-50: #F9F9F9;
--neutral-100: #F2F2F2;
--neutral-200: #E5E5E5;
--neutral-300: #D1D1D1;
--neutral-400: #B0B0B0;
--neutral-500: #8C8C8C;
--neutral-600: #666666;
--neutral-700: #4D4D4D;
--neutral-800: #333333;
--neutral-900: #1A1A1A;
--neutral-950: #0A0A0A;  /* Почти чёрный */

/* Для текста */
--text-primary: #1A1A1A;
--text-secondary: #666666;
--text-tertiary: #8C8C8C;
--text-inverse: #FFFFFF;
```

### Акцентные цвета

```css
/* Success (зелёный) */
--success-50: #ECFDF5;
--success-100: #D1FAE5;
--success-500: #10B981;
--success-600: #059669;
--success-700: #047857;

/* Error (красный) */
--error-50: #FEF2F2;
--error-100: #FEE2E2;
--error-500: #EF4444;
--error-600: #DC2626;
--error-700: #B91C1C;

/* Warning (оранжевый) */
--warning-50: #FFF7ED;
--warning-100: #FFEDD5;
--warning-500: #F97316;
--warning-600: #EA580C;
--warning-700: #C2410C;

/* Info (синий) */
--info-50: #EFF6FF;
--info-100: #DBEAFE;
--info-500: #3B82F6;
--info-600: #2563EB;
--info-700: #1D4ED8;
```

### Фоновые цвета

```css
--bg-primary: #FFFFFF;
--bg-secondary: #F9F9F9;
--bg-tertiary: #F2F2F2;
--bg-elevated: #FFFFFF;  /* Для карточек с тенью */
--bg-overlay: rgba(0, 0, 0, 0.5);  /* Для модалок */
```

---

## 📝 Типографика

### Шрифт: TinkoffSans

Т-банк использует свой фирменный шрифт **TinkoffSans** (сейчас T-Bank Sans).

**Подключение:**
```css
/* Вариант 1: Self-hosted (рекомендую) */
@font-face {
  font-family: 'TBankSans';
  src: url('/fonts/TBankSans-Regular.woff2') format('woff2'),
       url('/fonts/TBankSans-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'TBankSans';
  src: url('/fonts/TBankSans-Medium.woff2') format('woff2'),
       url('/fonts/TBankSans-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'TBankSans';
  src: url('/fonts/TBankSans-Bold.woff2') format('woff2'),
       url('/fonts/TBankSans-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

**Fallback шрифты** (если TBankSans недоступен):
```css
font-family: 'TBankSans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             'Roboto', 'Helvetica Neue', Arial, sans-serif;
```

### Размеры текста

```css
/* Шкала размеров */
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px - основной */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */
--text-6xl: 3.75rem;    /* 60px */

/* Для Tailwind config */
fontSize: {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
}
```

### Высота строки (Line Height)

```css
--leading-tight: 1.2;
--leading-normal: 1.5;
--leading-relaxed: 1.75;

/* Для заголовков */
h1, h2, h3 { line-height: 1.2; }

/* Для текста */
p, span { line-height: 1.5; }
```

### Веса шрифтов

```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;

/* Использование */
.heading { font-weight: 700; }
.button { font-weight: 500; }
.body { font-weight: 400; }
```

### Типографическая шкала

```css
/* H1 - Hero заголовок */
h1, .text-h1 {
  font-size: 3rem;        /* 48px */
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

/* H2 - Заголовок секции */
h2, .text-h2 {
  font-size: 2.25rem;     /* 36px */
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

/* H3 - Подзаголовок */
h3, .text-h3 {
  font-size: 1.875rem;    /* 30px */
  font-weight: 700;
  line-height: 1.3;
}

/* H4 - Карточки */
h4, .text-h4 {
  font-size: 1.5rem;      /* 24px */
  font-weight: 600;
  line-height: 1.4;
}

/* H5 - Малые заголовки */
h5, .text-h5 {
  font-size: 1.25rem;     /* 20px */
  font-weight: 600;
  line-height: 1.4;
}

/* Body Large */
.text-body-lg {
  font-size: 1.125rem;    /* 18px */
  font-weight: 400;
  line-height: 1.6;
}

/* Body (основной) */
.text-body {
  font-size: 1rem;        /* 16px */
  font-weight: 400;
  line-height: 1.5;
}

/* Body Small */
.text-body-sm {
  font-size: 0.875rem;    /* 14px */
  font-weight: 400;
  line-height: 1.5;
}

/* Caption */
.text-caption {
  font-size: 0.75rem;     /* 12px */
  font-weight: 400;
  line-height: 1.4;
  color: var(--text-secondary);
}

/* Button Text */
.text-button {
  font-size: 1rem;        /* 16px */
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.01em;
}
```

---

## 🧩 Компоненты

### Buttons

```css
/* Primary Button (жёлтая кнопка Т-банка) */
.btn-primary {
  background: var(--primary-300);
  color: var(--neutral-950);
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 500;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: var(--primary-400);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(255, 230, 0, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
}

/* Secondary Button (чёрная обводка) */
.btn-secondary {
  background: transparent;
  color: var(--neutral-950);
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 500;
  border: 2px solid var(--neutral-300);
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: var(--neutral-50);
  border-color: var(--neutral-400);
}

/* Ghost Button */
.btn-ghost {
  background: transparent;
  color: var(--neutral-950);
  padding: 12px 24px;
  border: none;
  font-weight: 500;
}

.btn-ghost:hover {
  background: var(--neutral-100);
  border-radius: 12px;
}

/* Размеры */
.btn-sm { padding: 8px 16px; font-size: 0.875rem; }
.btn-md { padding: 12px 24px; font-size: 1rem; }
.btn-lg { padding: 16px 32px; font-size: 1.125rem; }
```

### Cards

```css
.card {
  background: var(--bg-elevated);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.card-interactive {
  cursor: pointer;
}

.card-interactive:active {
  transform: translateY(0);
}
```

### Inputs

```css
.input {
  width: 100%;
  padding: 12px 16px;
  background: var(--bg-primary);
  border: 2px solid var(--neutral-200);
  border-radius: 12px;
  font-size: 1rem;
  font-family: 'TBankSans', sans-serif;
  transition: all 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: var(--primary-300);
  box-shadow: 0 0 0 4px rgba(255, 230, 0, 0.1);
}

.input::placeholder {
  color: var(--text-tertiary);
}

.input-error {
  border-color: var(--error-500);
}

.input-error:focus {
  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);
}
```

### Badges

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
}

.badge-primary {
  background: var(--primary-100);
  color: var(--primary-900);
}

.badge-success {
  background: var(--success-100);
  color: var(--success-700);
}

.badge-error {
  background: var(--error-100);
  color: var(--error-700);
}

.badge-neutral {
  background: var(--neutral-100);
  color: var(--neutral-700);
}
```

---

## 📐 Spacing

### Шкала отступов (как у Т-банка)

```css
--spacing-0: 0;
--spacing-1: 0.25rem;   /* 4px */
--spacing-2: 0.5rem;    /* 8px */
--spacing-3: 0.75rem;   /* 12px */
--spacing-4: 1rem;      /* 16px */
--spacing-5: 1.25rem;   /* 20px */
--spacing-6: 1.5rem;    /* 24px */
--spacing-8: 2rem;      /* 32px */
--spacing-10: 2.5rem;   /* 40px */
--spacing-12: 3rem;     /* 48px */
--spacing-16: 4rem;     /* 64px */
--spacing-20: 5rem;     /* 80px */
--spacing-24: 6rem;     /* 96px */

/* Для Tailwind */
spacing: {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
}
```

---

## 🎭 Shadows

```css
/* Т-банк использует мягкие тени */
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.12);

/* Жёлтая тень для hover эффектов */
--shadow-primary: 0 4px 12px rgba(255, 230, 0, 0.3);
```

---

## 🔲 Border Radius

```css
/* Т-банк любит скруглённые углы */
--radius-xs: 4px;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-2xl: 32px;
--radius-full: 9999px;  /* Для круглых элементов */
```

---

## ⚡ Transitions & Animations

```css
/* Стандартные transition */
--transition-fast: 150ms ease;
--transition-base: 200ms ease;
--transition-slow: 300ms ease;

/* Easing functions (как у Т-банка) */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);  /* Bouncy */
```

### Анимации

```css
/* Fade In */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Slide Up */
@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

/* Scale In */
@keyframes scaleIn {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
```

---

## 📱 Breakpoints

```css
/* Mobile First подход */
--screen-sm: 640px;   /* Маленькие телефоны */
--screen-md: 768px;   /* Планшеты */
--screen-lg: 1024px;  /* Ноутбуки */
--screen-xl: 1280px;  /* Десктопы */
--screen-2xl: 1536px; /* Большие экраны */

/* Tailwind breakpoints */
screens: {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}
```

---

## 🎯 Layout

### Container

```css
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container { padding: 0 1.5rem; }
}

@media (min-width: 1024px) {
  .container { padding: 0 2rem; }
}
```

### Grid System

```css
/* 12-колоночная сетка */
.grid {
  display: grid;
  gap: 1.5rem;
}

.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
```

---

## 🖼️ Icons

**Рекомендуемая библиотека:** [Lucide Icons](https://lucide.dev/)

Почему Lucide:
- Чистый, современный стиль (подходит под Т-банк)
- Tree-shakeable
- React компоненты
- Можно настроить толщину линий

```bash
pnpm add lucide-react
```

**Альтернативы:**
- Heroicons
- Feather Icons
- Phosphor Icons

---

## 🎨 Figma Kit

### Что включить в Figma:

**1. Foundations**
- Цвета (палитра + semantic tokens)
- Типографика (все стили)
- Иконки
- Spacing
- Shadows

**2. Components**
- Buttons (все варианты)
- Inputs & Forms
- Cards
- Modals
- Navigation
- Badges & Tags
- Progress bars
- Charts (для статистики)

**3. Templates**
- Landing page
- Dashboard
- Test interface
- Profile page

---

## 📦 Где взять шрифт TBankSans?

**Проблема:** Шрифт Т-банка проприетарный и не публично доступен.

**Решения:**

**Вариант 1: Использовать похожие шрифты**
```css
/* Inter - очень похож на TBankSans */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

**Вариант 2: Geometria** (платный, но очень похож)
- Купить на MyFonts

**Вариант 3: Manrope** (бесплатный Google Font)
```css
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap');

font-family: 'Manrope', sans-serif;
```

**Рекомендация:** Используй **Inter** — он бесплатный, очень похож визуально и отлично оптимизирован.

---

## 🎨 Палитра в HEX (для копирования)

```
Жёлтый основной: #FFE600
Жёлтый hover: #FFDD00
Чёрный текст: #1A1A1A
Серый secondary: #666666
Фон: #FFFFFF
Фон вторичный: #F9F9F9

Success: #10B981
Error: #EF4444
Warning: #F97316
Info: #3B82F6
```

---

## ✅ Checklist для дизайна

- [ ] Скачать/подключить Inter шрифт
- [ ] Создать Figma файл
- [ ] Добавить цветовую палитру в Figma
- [ ] Создать стили текста
- [ ] Нарисовать базовые компоненты
- [ ] Создать wireframes
- [ ] Создать высокодетальные макеты

---

**Автор**: AI-assistant  
**Обновлено**: 26.06.2026
