import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(37, 132, 244, 0.15) -140.54%, rgba(37, 132, 244, 0) 100%)",
        "development-sidebar":
          "linear-gradient(180deg, rgba(37, 132, 244, 0.15) -140.54%, rgba(37, 132, 244, 0) 100%)",
        "button-gradient":
          "linear-gradient(111.43deg, #2584F4 14.1%, #2FC88B 85.9%)",
      },
    },
  },
  plugins: [],
};
export default config;
