import type { PageServerLoad } from './$types';
import type { CourseOverviewData, TimelineEventData } from '$lib/types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ fetch, locals }) => {
	if (!locals.authenticated) {
		throw redirect(302, '/');
	}
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
