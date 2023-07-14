/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-spin': 'bounce-spin 3s linear infinite',
       },
       translate: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      transform: ['active'],
      scale: ['active']
    },
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
        ".btn-select": {
          "background-color": "#121212",
          "border-color": "#ffffff",
          "color": "#ffffff", // Set text color when normal
        },
        ".btn-select:hover": {
          "background-color": "#ffffff",
          "border-color": "#ffffff",
          "color": "#121212", // Set text color when hovered
        },
        "accent": "#1DB954",
        "primary": "#ffffff",
        
      },
    },
    "luxury",
  ],
  },
}

