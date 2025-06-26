import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a8a',
          50: '#ece9f9',
          100: '#ddd6fe',
          500: '#1e3a8a',
          600: '#1e40af',
          700: '#1d4ed8',
        },
        violet: {
          50: '#ece9f9',
          100: '#ddd6fe',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config