/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      vazir: "Vazirmatn_500Medium",
      reem: "ReemKufiFun_500Medium",
      marhey: "Marhey_700Bold",
      body: ["vazir"],
    },
    backgroundImage: {
      blur: "url('/assets/blur2.png')",
    },
    colors: {
      prime: { 100: "#EDEDED", 200: "#EDEDED", 300: "#EDEDED" },
      bg: { 100: "#EDEDED", 200: "#EDEDED", 300: "#EDEDED" },
      accent: { 100: "#EDEDED", 200: "#EDEDED" },
      text: { 100: "#EDEDED", 200: "#EDEDED" },

      error: "#DB005B",
      success: "#1DC322",
      info: "#3A5290",
      warning: "#E7B10A",
      softYellow : "#FFE569",
      resid :"#909090",
      white: "#FFF",
      black: "#000",
      red: "#DB005B",
      green: "#1DC322",
      blue: "#3A5290",

      iron: "#dfe0e2",
      abzar: "#FCEED7",
      mashin: "#d7ad88",
      sakhteman: "#fff689",
      avalie: "#f17255",
      daro: "#a6e3d8",
      wood: "#f1d5b9",
      food: "#f59f7a",
    },
  },
  plugins: [],
};
