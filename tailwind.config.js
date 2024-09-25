/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				regular: ["EthnoRegular", "sans-serif"],
				italic: ["EthnoItalic", "sans-serif"],
			},
			animation: {
				fadeInMd: "fadeIn 1.1s ease forwards 0.5s",
				bounceInD1: "bounceIn 1.1s ease forwards 0.5s",
				bounceInD2: "bounceIn 1.1s ease forwards 0.7s",
				bounceInD3: "bounceIn 1.1s ease forwards 0.9s"
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 }
				},
				fadeLeft: {
					"0%": {transform: 'translateX(80px)', opacity:0},
					"100%": {transform: 'translateX(0px)', opacity:1} 
				},
				fadeUp: {
					"0%": {transform: 'translateY(-80px)', opacity:0},
					"100%": {transform: 'translateY(0px)', opacity:1} 
				},
				bounceIn: {
					"0%":{
						opacity: 0,
						transform: 'scale(.3)'
					},
					"50%": {
						opacity: 1,
						transform: 'scale(1.05)'
					},
					"70%": { transform: 'scale(.9)' },
					"100%": { transform: 'scale(1)', opacity:1 }
				}
			},
		},
	},
	variants: {
		animation: ["motion-safe"]
	},
	plugins: [],
}

