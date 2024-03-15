/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#14b8a6",
        headingcolor: "#334155",
        bgShade: "#F5FCFF",
        dribble: "##dc2626",
        body: "##082f49",
      },
    },
  },
  plugins: [],
}
