/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "footer-darkblue": "#22262F",
        "grey-copyright": "#AFAFAF",
      },
      borderWidth: {
        1: "1px",
      },
      backgroundImage: {
        "home-banner": "url('/assets/homebanner.png')",
      },
    },
  },
  plugins: [],
};
