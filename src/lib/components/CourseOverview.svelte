<script lang="ts">
	import { AssignmentOverview, Leaderboard } from '$lib/components';
	import type { CourseOverviewData } from '$lib/types';
	import RightArrow from './icons/RightArrow.svelte';
	import Section from './util/Section.svelte';

	let style = '';
	export { style as class };

	export let data: CourseOverviewData;
	// TODO: Should leaderboard data be requested via courseId?
	const { courseId, courseName, courseCode, leaderboardRows: rows, nextAssignment } = data;
</script>

<Section class={`p-8 grid grid-cols-1 gap-4 lg:gap-10 max-w-2xl lg:max-w-5xl ${style}`}>
	<div class="flex flex-row justify-between">
		<div>
			<p class="text-4xl font-bold">{courseName}</p>
			<p class="font-thin">{courseCode}</p>
		</div>
		<div class="ml-16 lg:ml-0 flex items-center">
			<a href={`/courses/${courseId}`}><RightArrow fill={'black'} stroke={'black'} /></a>
		</div>
	</div>
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
		<!-- TODO: What if there is no leaderboard? -->
		<div class="flex flex-col">
			<p>EDETABEL</p>
			<Leaderboard {rows} />
		</div>
		<!-- TODO: What if there is no next assignment? -->
		<div class="flex flex-col">
			<p>JÄRGMINE ÜLESANNE</p>
			<AssignmentOverview data={nextAssignment} />
		</div>
	</div>
</Section>
