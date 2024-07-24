module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "black-rgba": "rgba(0, 0, 0, 0.70)",
        "black-bg": "rgba(0, 0, 0, 0.50)",
        "black-bg1": "rgba(0, 0, 0, 0.25)",
        "black-bg2": "rgba(0, 0, 0, 0.10)",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      background: {
        hero: "url(images/bg1.jpg)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
