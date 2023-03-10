<script lang="ts">
	import CourseOverview from '$lib/components/CourseOverview.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { courseOverviewList, timelineEventsList } = data;
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
			<Timeline eventsList={timelineEventsList} />
		</div>
	</div>
</div>

<style>
</style>
