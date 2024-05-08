import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx,scss}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          lighten: '#232323',
          light: '#121212',
          DEFAULT: '#04080B',
          dark: '#050505',
          darken: '#000',
        },
        secondary: {
          lighten: '#b7f6c7',
          light: '#9cf4b2',
          DEFAULT: '#8AEDA4',
          dark: '#5ab171',
          darken: '#478c59',
        },
      },
    },
  },
  plugins: [],
}
export default config
