/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			colors: {
				white: "hsl(0, 0%, 100%)",
				grey: "hsl(0, 0%, 20%)",
				dark_grey: "hsl(0, 0%, 12%)",
				off_black: "hsl(0, 0%, 8%)",
				green: "hsl(75, 94%, 57%)",
			},
			fontFamily: {
				main: ["Inter", "sans-serif"],
			},
			fontSize: {
				normal: "14px",
			},
		},
	},
	plugins: [],
};
