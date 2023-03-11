import type { AssignmentDetails } from '$lib/types';
import type { PageServerLoad } from './$types';
// TODO: Add server response validation, Joi is probably best bet

// finds specified assignment based on courseId and assignmentId
export const load = (async ({ params, fetch }) => {
	// const { assignmentId, courseId } = params;

	const { data: details } = await fetch("/src/lib/util/mockData/assignmentDetails.json")
        .then((res) => res.json())
        .catch((err) => console.log(err));

    const assignmentDetails: AssignmentDetails = details;

	return {
		assignmentDetails,
	};
}) satisfies PageServerLoad;
