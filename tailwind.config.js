/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hospital: {
          teal: '#0F766E',
          teal2: '#15958A',
          tealSoft: '#E9F8F6',
          navy: '#12364A',
          ink: '#18333F',
          muted: '#637681',
          pink: '#D7195A',
          pinkSoft: '#FFF1F6',
          line: '#D9E9E7',
          bg: '#F7FBFB'
        }
      },
      boxShadow: {
        soft: '0 18px 50px rgba(18, 61, 68, .12)',
        card: '0 10px 30px rgba(25, 67, 75, .08)'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
}
