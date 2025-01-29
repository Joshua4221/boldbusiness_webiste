/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem 0rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(0deg, rgba(213, 230, 253, 0.105) 0.76%, rgba(0, 111, 255, 0.03) 100%)",
      },
      colors: {
        hashBackground: "#F8FAFC",
        darkBackground: "#000000",
        darkBlueBackground: "#0F172A",
        primary: {
          DEFAULT: "#12141D",
          light: "#1E202B", // Example lighter shade
          dark: "#0E0F17", // Example darker shade
        },
        lemon: {
          DEFAULT: "#DCFFC7",
          light: "#E6FFDA", // Example lighter shade
          dark: "#C7F5A7", // Example darker shade
        },
      },
    },
  },
  plugins: [],
};
