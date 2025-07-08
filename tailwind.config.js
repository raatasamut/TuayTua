/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // New color scheme
        'soy-cream': '#FDF6EC',
        'tofu-white': '#FFFDF9',
        'soybean-yellow': '#F5D76E',
        'warm-brown': '#5E4630',
        'edamame-green': '#A7D49B',
        'sesame-gray': '#B0AFAF',
        'dark-soy': '#2E2B27',

        // Keep existing colors for backward compatibility
        cream: '#FDF6EC', // Updated to Soy Cream
        pink: '#F8D7DA',
        'soft-green': '#A7D49B', // Updated to Edamame Green
        beige: '#F5F5DC',
        'blush-pink': '#FEC5BB',
        'pastel-yellow': '#F5D76E', // Updated to Soybean Yellow
        'pastel-blue': '#BBDEFB',
        'pastel-purple': '#E1BEE7',
        'pastel-orange': '#FFCCBC',
      },
      fontFamily: {
        sans: ['var(--font-sarabun)', 'var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        'full': '9999px',
        'bubble': '50% 50% 50% 5%',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatSideways: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' },
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-delay': 'float 3.5s ease-in-out infinite 0.5s',
        'float-slow': 'float 6s ease-in-out infinite 1s',
        'float-sideways': 'floatSideways 5s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
