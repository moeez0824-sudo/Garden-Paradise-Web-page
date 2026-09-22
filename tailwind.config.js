/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f3f8f4',
          100: '#e3f0e6',
          200: '#c7e1cd',
          300: '#9ecaa7',
          400: '#6ea97b',
          500: '#4a8b58',
          600: '#387044',
          700: '#2c5837',
          800: '#25472e',
          900: '#1e3b26',
          950: '#0e2014',
        },
        accent: {
          50: '#fbf8f3',
          100: '#f5eee3',
          200: '#eadbc7',
          300: '#dbc1a3',
          400: '#c8a27d',
          500: '#ba885f',
          600: '#a6724b',
          700: '#875a3c',
          800: '#6e4933',
          900: '#5b3d2c',
          950: '#311f16',
        },
        earth: {
          50: '#fdfcf9',
          100: '#f9f6f0',
          200: '#f2ece0',
          300: '#e6dbca',
          400: '#d5c4ad',
          500: '#ba9f83',
          600: '#a38466',
          700: '#83674f',
          800: '#6d5543',
          900: '#5a4638',
        },
      },
      boxShadow: {
        'soft': '0 2px 12px -2px rgba(28, 56, 35, 0.06)',
        'medium': '0 8px 24px -4px rgba(28, 56, 35, 0.09)',
        'elevated': '0 16px 36px -6px rgba(28, 56, 35, 0.12)',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};