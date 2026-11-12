/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      colors: {
        // Lime accent (dark text on 400/500; 600+ are dark enough for text on white)
        brand: {
          50: '#f5fee6', 100: '#e8fcc6', 200: '#d3f98f', 300: '#b8f24a', 400: '#acf31c',
          500: '#9fef00', 600: '#6fa800', 700: '#527d00', 800: '#3f6006', 900: '#344f0a',
        },
        // Blue-grey neutrals: deep navy surfaces in dark mode
        slate: {
          50: '#f6f8fb', 100: '#eef1f6', 200: '#dfe4ec', 300: '#c6cfdc', 400: '#a4b1cd', 500: '#7b88a1',
          600: '#536079', 700: '#2f3b4f', 800: '#232f42', 900: '#1a2332', 950: '#111927',
        },
      },
      keyframes: {
        'fade-up': { '0%': { opacity: 0, transform: 'translateY(8px)' }, '100%': { opacity: 1, transform: 'none' } },
        pop: { '0%': { transform: 'scale(.96)' }, '60%': { transform: 'scale(1.02)' }, '100%': { transform: 'scale(1)' } },
        shake: { '0%,100%': { transform: 'none' }, '25%': { transform: 'translateX(-4px)' }, '75%': { transform: 'translateX(4px)' } },
      },
      animation: {
        'fade-up': 'fade-up .35s ease-out both',
        pop: 'pop .3s ease-out',
        shake: 'shake .3s ease-in-out',
      },
    },
  },
  plugins: [],
};
