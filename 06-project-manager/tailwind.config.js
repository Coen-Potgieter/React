/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            colors: {
                "my-beige": "#FCF8E8",
                "my-green": "#D4E2D4",
                "my-light-orange": "#ecb390",
                "my-dark-orange": "#df7861"
            },
            keyframes: {
                pulseText: {
                    "0%, 100%": {color: "rgb(255, 0, 0)"},
                    "50%": {color: "rgb(0, 0, 255)"},
                },
                fadeIn: {
                    "0%": {opacity: "0"},
                    "100%": {opacity: "1"},
                },
            },
            animation: {
                pulseText: "pulseText 2s ease-in-out infinite",
                fadeIn: "fadeIn 0.5s ease-out",
            },
        },

  },
  plugins: [],
}

