/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#F5C518',
          'yellow-dark': '#D4A017',
          'yellow-light': '#FDD835',
          dark: '#111827',
          darker: '#0A0F1A',
          gray: '#6B7280',
          'gray-light': '#F9FAFB',
          'gray-mid': '#E5E7EB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(135deg, rgba(17,24,39,0.92) 0%, rgba(17,24,39,0.75) 50%, rgba(245,197,24,0.15) 100%)",
      }
    },
  },
  plugins: [],
}
