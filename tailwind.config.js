/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    minHeight: {
      '1/2': '35rem',
      'screen': '100vh'
    }
  },
  plugins: [],
}
