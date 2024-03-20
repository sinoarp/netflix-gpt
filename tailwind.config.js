/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar" : {
            width: "1px"
          },
          "&::-webkit-scrollbar-track" : {
            background: "black"
          },
          "&::-webkit-scrollbar-thumb" : {
            background: "rgb(31 41 55)",
            borderRadius: "20px",
            border: "1px solid white"
          }
        }
      }

      addUtilities(newUtilities, ["responsive","hover"])
    }
  ],
};