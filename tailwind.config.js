module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3C8599",
          secondary: "#212121",
          "base-100": "#ffffff",
        },
      },
      "light",
    ],
  },
};
