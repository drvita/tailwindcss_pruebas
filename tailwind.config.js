module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        estrella: "url('/svg/estrella.svg')",
      }),
      colors: {
        titulo: "#283553",
        relleno: "#35DCBF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
