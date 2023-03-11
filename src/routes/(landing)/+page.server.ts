import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	// clicking button should set isLoggedIn: true in cookies ?
	return {};
}) satisfies PageServerLoad;
