import type { TimelineEventData } from '$lib/types';
import { render } from '@testing-library/svelte';
import Timeline from './Timeline.svelte';

describe('Timeline.svelte', () => {
	it('should render component', () => {
		const mockEventsList: TimelineEventData[] = [
			{
				title: 'TEST TITLE',
				subTitle: 'TEST SUBTITLE',
				deadlineTime: '00:00:00',
				deadlineDate: '01.01.1970',
				timeRemaining: '10h',
				tags: ['TEST TAG']
			}
		];

		const { container } = render(Timeline, { eventsList: mockEventsList });
		expect(container).toMatchSnapshot();
	});
});
