/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				primary: {
					100: '#2DF0D3',
					200: '#1ADBBE',
					300: '#0DBFA4'
				}
			}
		}
	}
	// plugins: [require('daisyui')]
};
