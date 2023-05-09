import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';
import { parse } from 'cookie';

const isDemonstrationMode = true;

export const handle: Handle = async ({ event, resolve }) => {
	const { headers } = event.request;
	const cookies = parse(headers.get('cookie') ?? '');

	// ----
	// this is only for demonstration, once thesis is defended, it should be removed so that server can check cookies for actual values needed to
	// ensure authentication.
	if (isDemonstrationMode) {
		event.locals.authenticated = true;
	} 
	// ----

	if (cookies.pac4jCsrfToken) {
		const token = cookies.pac4jCsrfToken;
		event.locals.authenticated = true;
	}

	return await resolve(event);
};
