import type { CourseOverviewData } from '$lib/types';
import { render } from '@testing-library/svelte';
import { CourseOverview } from '$lib/components';
import theme from '$lib/shared/stores/theme';

describe('CourseOverview.svelte', () => {
	const mockCourse: CourseOverviewData = {
		courseId: 0,
		courseName: '',
		courseCode: '',
		leaderboardRows: [],
		nextAssignment: {
			assignmentId: 1,
			courseId: 0,
			topic: 'TEST TOPIC',
			title: 'TEST TITLE',
			deadlineDate: '01.01.1970',
			deadlineTime: '00:00:00',
			tags: ['test tag'],
			completed: false
		}
	};
	it('should render component', () => {
		theme.set('light');
		const { container } = render(CourseOverview, { data: mockCourse });
		expect(container).toMatchSnapshot();
	});

	it('should render component with contrast color scheme', () => {
		theme.set('contrast');
		const { container } = render(CourseOverview, { data: mockCourse });
		expect(container).toMatchSnapshot();
	});
});
