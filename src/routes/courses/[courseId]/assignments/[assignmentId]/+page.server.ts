import type { CoursePageData } from "$lib/types";
import type { PageServerLoad } from "./$types";
// TODO: Add server response validation, Joi is probably best bet

export const load = (async ({ params, fetch }) => {
    const { assignmentId, courseId } = params;

    const { data: coursePageData } = await fetch('/src/lib/util/mockData/coursesPage.json')
        .then((res) => res.json())
        .catch((e) => console.log(e));

    const courseInfo: CoursePageData = coursePageData[courseId];
    if (!courseInfo) {
        throw new Error(`Could not find course with ID: ${courseId}`)
    }
    return {
        courseInfo
    }
}) satisfies PageServerLoad;