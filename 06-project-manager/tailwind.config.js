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
            }
        },
  },
  plugins: [],
}

