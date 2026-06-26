/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // T-Bank Yellow
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
          DEFAULT: '#FFE600',
        },
        // Neutrals
        neutral: {
          0: '#FFFFFF',
          50: '#F9F9F9',
          100: '#F2F2F2',
          200: '#E5E5E5',
          300: '#D1D1D1',
          400: '#B0B0B0',
          500: '#8C8C8C',
          600: '#666666',
          700: '#4D4D4D',
          800: '#333333',
          900: '#1A1A1A',
          950: '#0A0A0A',
        },
        // Semantic colors
        success: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          DEFAULT: '#10B981',
        },
        error: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          DEFAULT: '#EF4444',
        },
        warning: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          DEFAULT: '#F97316',
        },
        info: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          DEFAULT: '#3B82F6',
        },
        // Background
        background: {
          primary: '#FFFFFF',
          secondary: '#F9F9F9',
          tertiary: '#F2F2F2',
        },
        // Text
        foreground: {
          primary: '#1A1A1A',
          secondary: '#666666',
          tertiary: '#8C8C8C',
          inverse: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        xs: '0.75rem',     // 12px
        sm: '0.875rem',    // 14px
        base: '1rem',      // 16px
        lg: '1.125rem',    // 18px
        xl: '1.25rem',     // 20px
        '2xl': '1.5rem',   // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem',  // 36px
        '5xl': '3rem',     // 48px
        '6xl': '3.75rem',  // 60px
      },
      spacing: {
        0: '0',
        1: '0.25rem',   // 4px
        2: '0.5rem',    // 8px
        3: '0.75rem',   // 12px
        4: '1rem',      // 16px
        5: '1.25rem',   // 20px
        6: '1.5rem',    // 24px
        8: '2rem',      // 32px
        10: '2.5rem',   // 40px
        12: '3rem',     // 48px
        16: '4rem',     // 64px
        20: '5rem',     // 80px
        24: '6rem',     // 96px
      },
      borderRadius: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        full: '9999px',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(0, 0, 0, 0.04)',
        sm: '0 1px 3px rgba(0, 0, 0, 0.06)',
        md: '0 4px 12px rgba(0, 0, 0, 0.08)',
        lg: '0 8px 24px rgba(0, 0, 0, 0.1)',
        xl: '0 16px 48px rgba(0, 0, 0, 0.12)',
        primary: '0 4px 12px rgba(255, 230, 0, 0.3)',
      },
      transitionDuration: {
        fast: '150ms',
        base: '200ms',
        slow: '300ms',
      },
      transitionTimingFunction: {
        'ease-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideUp: {
          from: {
            transform: 'translateY(100%)',
          },
          to: {
            transform: 'translateY(0)',
          },
        },
        scaleIn: {
          from: {
            transform: 'scale(0.95)',
            opacity: '0',
          },
          to: {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 200ms ease',
        slideUp: 'slideUp 300ms ease',
        scaleIn: 'scaleIn 200ms ease',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
