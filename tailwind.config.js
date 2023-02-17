/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				mainBg: '#1E213A',
				weeklyBg: '#100E1D',
				formInputBg: '#6E707A',
			},
		},
	},
	plugins: [],
};
