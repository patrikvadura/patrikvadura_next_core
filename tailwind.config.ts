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
          light: '#191919',
          DEFAULT: '#04080B',
          dark: '#050505',
          darken: '#000',
        },
      },
    },
  },
  plugins: [],
}
export default config
