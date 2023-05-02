<script lang="ts">
	import CourseOverview from '$lib/components/CourseOverview.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import isAuthenticated from '$lib/shared/stores/auth';
	import { onMount } from 'svelte';

	export let data: PageData;
	const { courseOverviewList, timelineEventsList } = data;
	onMount(() => {
		if (!$isAuthenticated) {
			goto('/');
		}
	});
</script>

<svelte:head>
	<title>Avaleht</title>
	<meta name="description" content="Deepmooc avaleht" />
</svelte:head>

<div class="flex flex-col lg:px-20">
	<div class="h-40 flex items-end p-3 dark:text-yellow-300">
		<h1 aria-label="Avaleht">Avaleht</h1>
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
