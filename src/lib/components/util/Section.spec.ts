import { render } from '@testing-library/svelte';
import Section from './Section.svelte';

describe('Section.svelte', () => {
	it('should render component', () => {
		const { container } = render(Section);
		expect(container).toMatchSnapshot();
	});
});
