import type { PageServerLoad } from './$types';
import type { CourseOverviewData, TimelineEventData } from '$lib/types';

export const load = (async ({ fetch }) => {
	const { data: coursesList } = await fetch('/mockData/courseOverviews.json')
		.then((res) => res.json())
		.catch((e) => console.log(e));

	const { data: timelineList } = await fetch('/mockData/timelineEvents.json')
		.then((res) => res.json())
		.catch((e) => console.log(e));

	const courseOverviewList: CourseOverviewData[] = coursesList;
	const timelineEventsList: TimelineEventData[] = timelineList;

	return {
		courseOverviewList,
		timelineEventsList
	};
}) satisfies PageServerLoad;
