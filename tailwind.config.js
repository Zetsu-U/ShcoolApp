/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				white: '#FFFFFF',
				blue: '#6488e0',
				pink: '#f1d3d0 ',
				black: '#2E2E33',
				gray: '#58585C',
				yellow: '#FFDC38',
				green: '#5FA957',
				danger: '#E4392D',
				warm_y: '#FBE6BB',
			},
			boxShadow: {
				bottomMenu: '0px -10px 30px rgba(0, 0, 0, 0.08)',
			},
		},
	},
}
