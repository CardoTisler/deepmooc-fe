<script lang="ts">
	import { Assignment, Leaderboard } from '.';
	import type { CourseOverviewData } from '$lib/types';
	import RightArrow from './icons/RightArrow.svelte';

	let style = '';
	export { style as class };

	export let data: CourseOverviewData;
	const { courseId, courseName, courseCode, leaderboardRows: rows, nextAssignment } = data;
</script>

<div class="p-8 grid grid-cols-1 gap-4 lg:gap-10 bordered rounded-xl bg-white w-full {style}">
	<div class="flex flex-row justify-between">
		<div>
			<p class="text-4xl font-bold">{courseName}</p>
			<p class="font-thin">{courseCode}</p>
		</div>
		<div class="ml-16 lg:ml-0 flex items-center">
			<button
				on:click={() => {
					alert(`Go to course ${courseCode} with id ${courseId}`);
				}}><RightArrow fill={'black'} stroke={'black'} /></button
			>
		</div>
	</div>
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
		<div class="flex flex-col">
			<p>EDETABEL</p>
			<Leaderboard {rows} />
		</div>

		<div class="flex flex-col">
			<p>JÄRGMINE ÜLESANNE</p>
			<Assignment data={nextAssignment} />
		</div>
	</div>
</div>
