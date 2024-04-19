/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  theme: {
    extend: {
      boxShadow: {},
      fontFamily: { poppins: "Poppins", playfairdisplay: "Playfair Display" },
      colors: {
        background: "#121212",
      }
    },
  },
  plugins: [],
}

