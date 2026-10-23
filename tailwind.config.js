/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      colors: {
        // Purple-tinted neutrals from the little-learner palette
        slate: {
          50: '#f7f5ff',
          100: '#efecfb',
          200: '#e2def0',
          300: '#cdc8e0',
          400: '#9b97b3',
          500: '#5f5b73',
          600: '#4a4660',
          700: '#353248',
          800: '#1f1d2b',
          900: '#15131f',
          950: '#0e0c16',
        },
        // The accent scale (blue-600 is little-learner's #5b4bdb purple)
        blue: {
          50: '#f4f2ff',
          100: '#ece9ff',
          200: '#dcd6ff',
          300: '#c2b9fc',
          400: '#9d91ff',
          500: '#7a6cf0',
          600: '#5b4bdb',
          700: '#4a3bc4',
          800: '#3b2fa3',
          900: '#2f2782',
          950: '#1d1850',
        },
      },
      boxShadow: {
        sm: '0 2px 10px rgba(40, 30, 90, 0.08)',
        md: '0 4px 16px rgba(40, 30, 90, 0.10)',
        lg: '0 8px 24px rgba(40, 30, 90, 0.14)',
      },
    },
  },
  plugins: [],
}
