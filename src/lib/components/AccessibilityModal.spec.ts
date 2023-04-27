import { AccessibilityModal } from '$lib/components';
import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import theme from '$lib/shared/stores/theme';

describe('AccessibilityModal.svelte', () => {
	it('should render component', () => {
		const toggleMenu = () => {
			return;
		};
		const { container } = render(AccessibilityModal, { toggleMenu });

		expect(container).toMatchSnapshot();
	});

	it('should render component with contrast color scheme', () => {
		theme.set('contrast');
		const toggleMenu = () => {
			return;
		};
		const { container } = render(AccessibilityModal, { toggleMenu });

		expect(container).toMatchSnapshot();
	});
});
