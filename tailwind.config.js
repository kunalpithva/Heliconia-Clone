module.exports = {
    theme: {
      extend: {
        animation: {
          'gradient-x': 'gradient-x 8s ease infinite',
        },
        keyframes: {
          'gradient-x': {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
        },
        backgroundSize: {
          '200': '200% 200%',
        },
      },
    },
  };
  module.exports = {
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 5s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
      },
    },
  },
}
