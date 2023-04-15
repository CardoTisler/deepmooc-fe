import type { LeaderboardRow } from '$lib/types';
import { render } from '@testing-library/svelte';
import Leaderboard from './Leaderboard.svelte';

describe('Leaderboard.svelte', () => {
	it('should render component', () => {
		const mockRows: LeaderboardRow[] = [
			{
				index: 1,
				name: 'TEST NAME',
				score: 100,
				bold: true
			}
		];

		const { container } = render(Leaderboard, { rows: mockRows });
		expect(container).toMatchSnapshot();
	});
});
