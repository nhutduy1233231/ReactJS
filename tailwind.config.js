/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx,html,js}'],
  theme: {
    extend: {
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)'
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)'
        }
      },
      screens: {
        xs: '480px', // mobile sm
        sm: '640px', // mobile
        md: '768px', // tablet
        lg: '1024px', // tablet large
        xl: '1280px', // pc
        '2xl': '1536px' // pc large
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
