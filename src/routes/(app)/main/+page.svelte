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
	<div class="h-40 flex items-end p-3 dark:text-yellow-300">
		<h1>Avaleht</h1>
	</div>

	<div class="flex flex-col items-center xl:flex-row">
		<div class="flex flex-col lg:w-3/5">
			{#each courseOverviewList as data}
				<CourseOverview {data} class="mb-12" />
			{/each}
		</div>

		<div class="lg:w-2/5">
			<Timeline eventsList={timelineEventsList} />
		</div>
	</div>
</div>

<style>
</style>
