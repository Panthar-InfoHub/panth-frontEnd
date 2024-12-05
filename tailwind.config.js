/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				xs: '475px'
			},
			backgroundImage: {
				'custom-radial': 'radial-gradient(circle, rgba(245, 245, 245, 1) 0%, rgba(235, 235, 235, 1) 100%)'
			},
			colors: {
				light: {
					'100': '#333F4E',
					'200': '#A3B2C7',
					'300': '#F2F5F9',
					'400': '#F2F4F8'
				},
				'bg-white': '#FFFDF6',
				'white-1': '#f5f5f5',
				'grey-1': '#c6c6c6',
				'grey-2': '#d9d9d9',
				'grey-3': '#ececec',
				'grey-4': '#fafafa',
				'black-1': '#0a0a0a',
				'black-2': '#171717',
				'black-3': '#1F2127',
				'black-hover': 'rgba(0, 0, 0, 0.7)',
				black: {
					'100': '#333333',
					'200': '#141413',
					'300': '#7D8087',
					DEFAULT: '#000000'
				},
			},
			fontFamily: {
				sans: ['var(--font-poppins)', 'sans-serif'],
			},

			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'100': '2px 2px 2px 2px rgb(0, 0, 0)',
				'200': '2px 2px 0px 2px rgb(0, 0, 0)',
				'300': '2px 2px 0px 2px rgb(238, 43, 105)',
				'drop-1': '0px 10px 30px 0px rgba(66, 71, 97, 0.1)',
				'drop-2': '0 8px 30px 0 rgba(65, 89, 214, 0.3)',
				'drop-3': '0 8px 30px 0 rgba(65, 89, 214, 0.1)'
			}
		}
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

module.exports = config;
