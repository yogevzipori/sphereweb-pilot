/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
      },
      // colors: {
      // lgray:'#BFBDBF',
      // mgray:'#АЗА1А6',
      // dgray:'#79818C',
      // lblue:'#5687A6',
      // mblue:'#568FA6',

      // },        
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
