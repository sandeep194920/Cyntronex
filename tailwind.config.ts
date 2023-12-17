import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-clr': '#f16645',
        'primary-clr-light1': '#f27559',
        'primary-clr-light2': '#f4856b',
        'black-text': '#343434',
        'light-gray': '#474747',
        'dark-gray': '#272829',
      },
    },
  },
  plugins: [],
}
export default config
