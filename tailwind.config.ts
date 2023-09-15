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
        'card-frontend': 'linear-gradient(70deg, #40046c 40%, #5a7ca4 40%);',
        'card-tools': 'linear-gradient(110deg, #fd6d4b 60%, #fd8d3b 60%)',
        'card-backend':'linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);',
        'header': '#40047c',
      },
      height: {
        page: 'calc(100vh - 4rem)',
      },
      screens: {
        small: { max: '412px' },
        medium: { max: '768px' },
        mobile: { max: '965px' },
        tablet: { min: '475px' },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
export default config
