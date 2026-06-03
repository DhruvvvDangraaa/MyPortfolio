/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0b1120',
        surface: '#f8fafc',
        electric: '#4f46e5',
        aqua: '#06b6d4',
        ember: '#f97316',
      },
      boxShadow: {
        glow: '0 24px 70px rgba(79, 70, 229, 0.22)',
        card: '0 24px 70px rgba(15, 23, 42, 0.12)',
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at 15% 20%, rgba(6, 182, 212, 0.20), transparent 28%), radial-gradient(circle at 78% 8%, rgba(249, 115, 22, 0.16), transparent 24%), radial-gradient(circle at 55% 72%, rgba(79, 70, 229, 0.22), transparent 30%)',
      },
    },
  },
  plugins: [],
};
