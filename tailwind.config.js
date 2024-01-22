/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        smallmobile: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        serif: ["var(--font-playfair)"],
      },
      colors: {
        "color-black": "#121212",
        "color-btn-gray": "#313438",
        "color-gray": "#141415",
        "color-light-gray": "#6B717B",
        "color-alternative": "#9A031E",
        "new-black": "#30292F",
        "second-title-gray": "#BCBCBC",
        "dark-purple": "#623EC8",
      },
    },
  },
  plugins: [],
};
