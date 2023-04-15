import { render } from "@testing-library/svelte";
import TimelineEvent from "./TimelineEvent.svelte";

describe('TimelineEvent.svelte', () => {
    it('should render component', () => {
        const mockData = {
            title: 'TEST TITLE',
            subTitle: 'TEST SUBTITLE',
            deadlineTime: '00:00:00',
            deadlineDate: '01.01.1970',
            timeRemaining: '10h',
            tags: ['TEST TAG']
        }

        const { container } = render(TimelineEvent, { data: mockData });
        expect(container).toMatchSnapshot();
    })
})