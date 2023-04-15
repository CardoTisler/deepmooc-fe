import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultValue = 'light';
const initialValue = browser ? window.localStorage.getItem('theme') ?? defaultValue : defaultValue;

const theme = writable<string>(initialValue);

theme.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('theme', value);

		if (window.localStorage.getItem('theme') === 'contrast') {
			window.document.querySelector('html')?.classList.add('dark');
		} else {
			window.document.querySelector('html')?.classList.remove('dark');
		}
	}
});

export default theme;
