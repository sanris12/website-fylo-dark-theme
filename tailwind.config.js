/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],

  theme: {
    container: {
      center: true,
    },
    colors: {
      introBg: "hsl(217, 28%, 15%)",
      mainBg: "hsl(218, 28%, 13%)",
      footerBg: "hsl(216, 53%, 9%)",
      testimonialsBg: "hsl(219, 30%, 18%)",
      btnBgfrom: "hsl(176, 68%, 64%)",
      btnBgTo: "hsl(198, 60%, 50%)",
      error: "hsl(0, 100%, 63%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      relay: ["Raleway", "sans-serif"],
      openSans: ["Open Sans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        bgHero: "url('./images/bg-curvy-mobile.svg')",
      },
    },
  },
  plugins: [],
};
