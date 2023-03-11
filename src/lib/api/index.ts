async function _fetch<TResponse>(url: string, config: RequestInit = {}): Promise<TResponse> {
	const response = await fetch(url, config);
	return await response.json();
}

async function request<TResponse>(url: string, config: RequestInit = {}) {
	try {
		return await _fetch<TResponse>(url, config);
	} catch (err) {
		console.error(err);
	}
}

const api = {
	get: <TResponse>(url: string) => request<TResponse>(url),
	post: <TBody extends BodyInit, TResponse>(url: string, body: TBody) =>
		request<TResponse>(url, { method: 'POST', body })
};

export default api;
