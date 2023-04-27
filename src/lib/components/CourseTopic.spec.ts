import { render } from '@testing-library/svelte';
import { CourseTopic } from '$lib/components';

describe('CourseTopic.svelte', () => {
	it('should render component', () => {
		const mockData = {
			topicTitle: 'TEST TOPIC',
			topicDescription: 'TEST DESCRIPTION',
			assignments: [
				{
					assignmentId: 1,
					courseId: 0,
					topic: 'TEST TOPIC',
					title: 'TEST TITLE',
					deadlineDate: '01.01.1970',
					deadlineTime: '00:00:00',
					tags: ['test tag'],
					completed: false
				}
			]
		};

		const { container } = render(CourseTopic, { data: mockData });
		expect(container).toMatchSnapshot();
	});
});
