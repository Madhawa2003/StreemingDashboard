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
      },
      animation: {
        'bg-flash': 'bg-flash 2s ease-in-out infinite',
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
