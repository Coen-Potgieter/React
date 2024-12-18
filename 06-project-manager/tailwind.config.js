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
                    "0%, 100%": {color: "rgb(168, 162, 158)"},
                    "50%": {color: "rgb(0,0,0)"},
                },
                pulseBorder: {
                    "0%, 100%": {borderColor: "rgb(168, 162, 158)"},
                    "50%": {borderColor: "rgb(0,0,0)"},
                },
                dropInOut: {
                    "0%, 100%": {opacity: "0", transform: "translateY(-20px)"},
                    "16.67%, 83.33%": {opacity: "0.9", transform: "translateY(0)"},
                },
            },
            animation: {
                pulseText: "pulseText 2s ease-in-out infinite",
                pulseBorder: "pulseRing 2s ease-in-out infinite",
                dropInOut: "dropInOut 3s ease-out forwards",
            },
        },

  },
  plugins: [],
}

