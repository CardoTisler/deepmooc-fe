import { render } from '@testing-library/svelte';
import { AssignmentOverview } from '$lib/components';
import type { AssignmentOverview as IAssignmentOverview } from '$lib/types.ts';
import theme from '$lib/shared/stores/theme';

describe('AssignmentOverview.svelte', () => {
	it('should render component with assignment button enabled', () => {
		theme.set('light');
		const mockAssignment: IAssignmentOverview = {
			assignmentId: 1,
			courseId: 0,
			topic: 'TEST TOPIC',
			title: 'TEST TITLE',
			deadlineDate: '01.01.1970',
			deadlineTime: '00:00:00',
			tags: ['test tag'],
			completed: false
		};
		const { container } = render(AssignmentOverview, { data: mockAssignment });
		expect(container).toMatchSnapshot();
	});

	it('should render component with assignment button disabled', () => {
		theme.set('contrast');
		const mockAssignment: IAssignmentOverview = {
			assignmentId: 1,
			courseId: 0,
			topic: 'TEST TOPIC',
			title: 'TEST TITLE',
			deadlineDate: '01.01.1970',
			deadlineTime: '00:00:00',
			tags: ['test tag'],
			completed: true
		};
		const { container } = render(AssignmentOverview, { data: mockAssignment });
		expect(container).toMatchSnapshot();
	});
});
