import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	// this is purely for demonstration purposes since backend is not hosted anywhere and I don't want to force
	// reviewers to boot it up. Therefore if backend is not running then login page will just let you to the app, otherwise
	// it will direct you to login which will redirect you back here.
	let backendAccessible = false;

	await fetch('http://localhost:8080/api/general/me')
		.then(() => (backendAccessible = true))
		.catch((e) => {
			console.log(e);
		});

	return {
		backendAccessible
	};
}) satisfies PageServerLoad;
