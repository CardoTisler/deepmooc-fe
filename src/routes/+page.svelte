<script lang="ts">
	import CourseOverview from '$lib/components/CourseOverview.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import type { CourseOverviewData } from '$lib/types';

	const courseOverviewList: CourseOverviewData[] = [
		{
			courseId: 1,
			courseName: 'Algoritmid ja andmestruktuurid',
			courseCode: 'LTAT.03.005',
			leaderboardRows: [
				{
					index: 1,
					name: 'xxHyperControlxx',
					score: 5043,
					bold: false
				},
				{
					index: 68,
					name: 'WhADoYoUuMEaN',
					score: 957,
					bold: false
				},
				{
					index: 69,
					name: 'X_totally_not_me_X',
					score: 953,
					bold: true
				}
			],
			nextAssignment: {
				assignmentId: 'test_1',
				topic: '6. KAHENDPUUD',
				title: '6.A Kahendpuu läbimine',
				deadlineDate: '12.02.2023',
				deadlineTime: '21.00',
				tags: ['lihtne', '7 punkti']
			}
		},
		{
			courseId: 2,
			courseName: 'Programmeerimine II',
			courseCode: 'LTAT.01.003',
			leaderboardRows: [
				{
					index: 1,
					name: 'WhADoYoUuMEaN',
					score: 1600,
					bold: false
				},
				{
					index: 11,
					name: 'NeverWonderer',
					score: 960,
					bold: false
				},
				{
					index: 12,
					name: 'X_totally_not_me_X',
					score: 754,
					bold: true
				}
			],
			nextAssignment: {
				assignmentId: 'test_2',
				topic: '1. FUNKTSIOONID',
				title: '1.2 Parameetrid',
				deadlineDate: '16.02.2023',
				deadlineTime: '23.59',
				tags: ['keeruline', '10 punkti']
			}
		}
	];
</script>

<svelte:head>
	<title>Avaleht</title>
	<meta name="description" content="Deepmooc avaleht" />
</svelte:head>

<div class="flex flex-col">
	<div class="bg-white bordered h-40 flex items-end p-3">
		<p class="flex text-3xl font-bold">Avaleht</p>
	</div>

	<div class="flex flex-row">
		<div class="flex flex-col w-1/2 lg:w-3/5">
			<!-- TODO: Create JSON objects that hold all necessary data for overviews, fetch them from server and insert here -->
			{#each courseOverviewList as data}
				<CourseOverview {data} class="mb-12" />
			{/each}
		</div>

		<div class="w-1/2 lg:w-2/5">
			<!-- TODO: Create JSON object that holds all necessary data for timeline, fetch them from server and insert here -->
			<Timeline />
		</div>
	</div>
</div>

<style>
</style>
