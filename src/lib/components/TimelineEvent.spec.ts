import { render } from '@testing-library/svelte';
import { TimelineEvent } from '$lib/components';
import theme from '$lib/shared/stores/theme';

describe('TimelineEvent.svelte', () => {
	const mockData = {
		title: 'TEST TITLE',
		subTitle: 'TEST SUBTITLE',
		deadlineTime: '00:00:00',
		deadlineDate: '01.01.1970',
		timeRemaining: '10h',
		tags: ['TEST TAG']
	};

	it('should render component', () => {
		theme.set('light');
		const { container } = render(TimelineEvent, { data: mockData });
		expect(container).toMatchSnapshot();
	});

	it('should render component with contrast color scheme', () => {
		theme.set('contrast');
		const { container } = render(TimelineEvent, { data: mockData });
		expect(container).toMatchSnapshot();
	});
});
