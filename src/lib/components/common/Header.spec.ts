import { render } from '@testing-library/svelte';
import Header from './Header.svelte';
import theme from '$lib/shared/stores/theme';

describe('Header.svelte', () => {
	it('should render component', () => {
		theme.set('light');
		const { container } = render(Header);

		expect(container).toMatchSnapshot();
	});

	it('should render component with contrast mode', () => {
		theme.set('contrast');
		const { container } = render(Header);

		expect(container).toMatchSnapshot();
	});
});
