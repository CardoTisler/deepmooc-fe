import type { TimelineEventData } from '$lib/types';
import { render } from '@testing-library/svelte';
import { Timeline } from '$lib/components';
import theme from '$lib/shared/stores/theme';

describe('Timeline.svelte', () => {
	const mockEventsList: TimelineEventData[] = [
		{
			title: 'TEST TITLE',
			subTitle: 'TEST SUBTITLE',
			deadlineTime: '00:00:00',
			deadlineDate: '01.01.1970',
			timeRemaining: '10h',
			tags: ['TEST TAG'],
			assignmentId: 69,
			courseId: 169
		}
	];

	it('should render component', () => {
		theme.set('light');
		const { container } = render(Timeline, { eventsList: mockEventsList });
		expect(container).toMatchSnapshot();
	});

	it('should render component with contrast color scheme', () => {
		theme.set('contrast');
		const { container } = render(Timeline, { eventsList: mockEventsList });
		expect(container).toMatchSnapshot();
	});
});
