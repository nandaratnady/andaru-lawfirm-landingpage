/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {

    themes: [
      {
        andaru: {

          primary: "#C9A227",
          secondary: "#111111",
          accent: "#E5C45A",
          neutral: "#1f1f1f",

          "base-100": "#ffffff",
          "base-200": "#f7f7f7",
          "base-300": "#ededed",

          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272"

        }
      }
    ],

    darkTheme: "andaru",   // ⬅ penting
    base: true,
    styled: true,
    utils: true

  }

}