module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'max-md': {'max':'767px'},
        'max-sm': {'max':'640px'},
        'vsm': '480px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}