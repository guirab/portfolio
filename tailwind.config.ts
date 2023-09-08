import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...require('tailwindcss/colors'),
      main: '#07f29c',
      header: '#40047c',
    },
    extend: {
      backgroundImage: {
        'main-background': 'linear-gradient(45deg, hsla(270, 94%, 25%, 1) 0%, hsla(158, 94%, 49%, 1) 100%);',
        // 'header': 'linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);',
        'header': '#40047c',
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
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
export default config
