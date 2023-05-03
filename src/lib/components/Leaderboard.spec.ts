import type { LeaderboardRow } from '$lib/types';
import { render } from '@testing-library/svelte';
import { Leaderboard } from '$lib/components';
import theme from '$lib/shared/stores/theme';

describe('Leaderboard.svelte', () => {
	const mockRows: LeaderboardRow[] = [
		{
			index: 1,
			name: 'TEST NAME',
			score: 100,
			bold: true
		}
	];

	it('should render component', () => {
		theme.set('light');
		const { container } = render(Leaderboard, { rows: mockRows });
		expect(container).toMatchSnapshot();
	});

	it('should render component with contrast color scheme', () => {
		theme.set('contrast');
		const { container } = render(Leaderboard, { rows: mockRows });
		expect(container).toMatchSnapshot();
	});
});
