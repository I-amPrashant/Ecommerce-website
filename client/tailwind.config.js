export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        heroImage:"url('./src/assets/hero.gif')",
      }
    },
  },
  plugins: [],
}