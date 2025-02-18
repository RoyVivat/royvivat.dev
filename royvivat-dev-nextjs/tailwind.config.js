/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#93c5fd",
  //         secondary: "#fed7aa",
  //         accent: "#0000ff",
  //         neutral: "#9ca3af",
  //         "base-100": "#e7e5e4",
  //         info: "#06b6d4",
  //         success: "#34d399",
  //         warning: "#fda4af",
  //         error: "#f43f5e",
  //       },
  //     },
  //   ],
  // },
  daisyui: {
    themes: ["light", "dark", "cmyk"],
  },
};
