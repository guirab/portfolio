import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': 'linear-gradient(45deg, hsla(270, 94%, 25%, 1) 0%, hsla(158, 94%, 49%, 1) 100%);',
        'header': 'linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);',
      },
      height: {
        page: 'calc(100vh - 4rem)',
      },
      screens: {
        small: { max: '412px' },
        medium: { max: '768px' },
        mobile: { max: '965px' },
      },
    },
  },
  plugins: [],
}
export default config
