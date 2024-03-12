/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontSize: {
        paragraph: "16px",
      },
      fontWeight: {
        "custom-500": "500",
        "custom-800": "800",
      },
      colors: {
        "custom-yellow": "hsl(47, 88%, 63%)",
        "custom-white": "hsl(0, 0%, 100%)",
        "custom-grey": "hsl(0, 0%, 50%)",
        "custom-black": "hsl(0, 0%, 7%)",
      },
      fontFamily: {
        main: "figtree",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
