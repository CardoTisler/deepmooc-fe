import type { CourseOverviewData } from '$lib/types';
import { render } from '@testing-library/svelte';
import CourseOverview from './CourseOverview.svelte';

describe('CourseOverview.svelte', () => {
	it('should render component', () => {
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

		const { container } = render(CourseOverview, { data: mockCourse });
		expect(container).toMatchSnapshot();
	});
});
