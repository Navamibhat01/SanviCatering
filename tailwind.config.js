/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#06170E',
          900: '#0B2518',
          850: '#0F2F1F',
          800: '#143B27',
          700: '#1B4F35',
          600: '#236946',
          500: '#2E855A',
        },
        gold: {
          100: '#FBF5E6',
          200: '#F5E6BF',
          300: '#EDD38F',
          400: '#E2BF62',
          500: '#D4AF37', // Classic Muted/Royal Gold
          600: '#B59124',
          700: '#8E7017',
          800: '#685110',
        },
        ivory: {
          50: '#FAF8F5',
          100: '#F5F1E9',
          200: '#ECE5D8',
          300: '#DFCDB8',
          400: '#CFB89D',
          900: '#2A251E',
        },
        saffron: {
          500: '#E06D14',
          600: '#C75708',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(11, 37, 24, 0.06)',
        'elevated': '0 12px 30px -4px rgba(11, 37, 24, 0.12)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
      }
    },
  },
  plugins: [],
}
