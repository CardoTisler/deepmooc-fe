import { render } from '@testing-library/svelte';
import Pill from './Pill.svelte';

describe('Pill.svelte', () => {
	it('should render component', () => {
		const { container } = render(Pill, { text: "test Pill component"});
		expect(container).toMatchSnapshot();
	});
});
 