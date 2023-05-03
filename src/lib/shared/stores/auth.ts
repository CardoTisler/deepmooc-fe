import { browser } from '$app/environment';
import { writable } from 'svelte/store';
// TODO: Replace "authenticated" key with storage items set by SAML auth and flip value to true for demonstration purposes
const defaultValue = false;
const initialValue = browser
	? window.localStorage.getItem('authenticated') === 'true'
	: defaultValue;

const isAuthenticated = writable<boolean>(initialValue);

isAuthenticated.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('authenticated', value.toString());
	}
});

export default isAuthenticated;
