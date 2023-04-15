import AccessibilityModal from './AccessibilityModal.svelte';
import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('AccessibilityModal.svelte', () => {
	it('should render component', () => {
		const toggleMenu = () => {
			return;
		};
		const { container } = render(AccessibilityModal, { toggleMenu });

		expect(container).toMatchSnapshot();
	});
});
