/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        cb: "#161A30",
        cb2: "#31304D",
        cg: "#B6BBC4",
        cw: "#F0ECE5",
      },
      textColor: {
        tb: "#161A30",
        tb2: "#31304D",
        tg: "#B6BBC4",
        tw: "#F0ECE5",
      },
      borderColor: {
        bb: "#161A30",
        bb2: "#31304D",
        bg: "#B6BBC4",
        bw: "#F0ECE5",
      },
    },
  },
  plugins: [],
};
