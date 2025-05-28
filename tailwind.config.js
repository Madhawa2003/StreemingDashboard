export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      keyframes: {
        'bg-flash': {
          '0%, 100%': { backgroundColor: '#6cffa1' },
          '50%': { backgroundColor: '#15803d' },
        },
        'bg-pulse': {
          '0%': { height: '6rem' }, // or '96px', etc.
          '50%': { height: '6.2rem' },
          '100%': { height: '6rem' }

        },

      },
      animation: {
        'bg-flash': 'bg-flash 2s ease-in-out infinite',
        'bg-pulse': 'bg-pulse 1s ease-in-out infinite',
      },


      fontFamily: {
        sans: [
          '"Inter"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },

}
