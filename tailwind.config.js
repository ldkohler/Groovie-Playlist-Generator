/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    borderRadius: {
      'full': '9999px',
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
        ...require("daisyui/src/theming/themes")["[data-theme=light]"],
        ".btn-spotify": {
          "background-color": "#121212",
          "border-color": "#1DB954",
          "color": "#1DB954", // Set text color when normal
        },
        ".btn-spotify:hover": {
          "background-color": "#1DB954",
          "border-color": "#1DB954",
          "color": "#121212", // Set text color when hovered
        },
        "accent": "#1DB954"
      },
    },
  ],
  },
}

