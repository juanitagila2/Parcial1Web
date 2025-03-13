
// tailwind.config.js
const {heroui} = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",], 
      theme: {
    extend: {
      colors: {
        "main-blue": "#03045E",
        "secondary-gray": "#999999",
        "secondary-blue": "#E9F9FD",
        "ternary-blue": "#00B4D8"
      }
    },
  },
  darkMode: "class",
  plugins: [heroui({
    defaultTheme: 'light',
			themes: {
				"repill-theme": {
					extend: 'light',
					colors: {
						primary: {
							DEFAULT: '#03045E',
							foreground: '#FFFFFF',
						},
					},
				},
			},
  })],
}

