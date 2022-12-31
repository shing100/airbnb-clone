module.exports = {
  content: ["./templates/**/*.{html,js}", "./templates/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        "25vh": "25vh",
        "50vh": "50vh",
        "75vh": "75vh"
      },
      borderRadius: {
        xl: "1.5rem"
      }
    }
  },
  variants: {},
  plugins: []
};