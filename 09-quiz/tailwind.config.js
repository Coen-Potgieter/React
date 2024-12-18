/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            fontFamily: {
                fingerPaint: ['"Finger Paint"', "cursive"],
                inconsolata: ['Inconsolata', "monospace"],
            },
            colors: {
                "my-teal": "#48f8f8",
                "my-blue": "#00aaff",
                "my-purple": "#3d144c",
                "history-col": "#faeb2c",
                "geography-col": "#B4FFB2",
                "react-col": "#e900ff",
                "coen-col": "#FF9316",
            },
            backgroundImage: {
                "radial-gradient": "radial-gradient(50% 75% at center, rgba(0, 0, 0, 0.4) 0%, rgba(61, 20, 76, 0.4) 60%)",
            }

        },
  },
  plugins: [],
}
