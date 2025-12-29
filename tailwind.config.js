import daisyui from "daisyui";
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [scrollbarHide, daisyui],
  daisyui: {
    themes: ["light", "dark", "cupcake", "corporate"],
  },
};
