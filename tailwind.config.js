/** @type {import('tailwindcss').Config} */
module.exports = {
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
      transformOrigin: {
        '0': '0%',
      },
      backgroundColor: {
        'custom-orange': '#F2AF2A',
      },
      textColor: {
        'custon-blue': '#0E3147'
      }, 
    },
  },
  variants: {},
  plugins: [],
}
