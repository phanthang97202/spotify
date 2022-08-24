/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "screen-navbar-player": 'calc(100vh - 6rem - 6rem)'
      }
    },
  },
  plugins: [],
};
