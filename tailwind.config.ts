import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
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
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')]
} satisfies Config
