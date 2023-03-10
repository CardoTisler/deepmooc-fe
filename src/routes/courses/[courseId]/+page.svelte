<script lang="ts">
	import type { PageData } from './$types';
	import CourseTopic from '$lib/components/CourseTopic.svelte';
	import RightArrow from '$lib/components/icons/RightArrow.svelte';
	import Section from '$lib/components/util/Section.svelte';
	import type { LeaderboardRow } from '$lib/types';
	import { Leaderboard } from '$lib/components';
	import { exampleLeaderboardRows } from '$lib/util/consts';
	export let data: PageData;

	const {
		courseInfo: { courseName, courseCode, topicsList }
	} = data;

	const activeLeaderboards: LeaderboardRow[][] = [
		exampleLeaderboardRows,
		exampleLeaderboardRows,
		exampleLeaderboardRows
	];
</script>

<svelte:head>
	<title>{courseName}</title>
	<meta name="description" content="Course page" />
</svelte:head>

<div class="flex flex-col">
	<div class="bg-white bordered flex h-40 items-end p-3">
		<div>
			<p class="flex text-3xl font-bold">{courseName}</p>
			<p>{courseCode}</p>
		</div>
	</div>

	<div class="flex flex-row">
		<div class="flex flex-col">
			{#each topicsList as topic}
				<CourseTopic data={topic} class="mb-12" />
			{/each}
		</div>

		<Section class="flex flex-col max-w-md ml-12 p-6 h-fit">
			<div class="flex flex-col">
				<div class="flex flex-row justify-between">
					<p class="tracking-wider text-gray-600">EDETABEL</p>
					<button on:click={() => alert('Dont know where to go')}>
						<RightArrow stroke="text-gray-600" fill="text-gray-600" />
					</button>
				</div>
				<Leaderboard rows={exampleLeaderboardRows} class="mt-6" />
			</div>
			<div class="flex flex-col">
				<p class="tracking-wider text-gray-600 py-6">AKTIIVSED EDETABELID</p>
				{#each activeLeaderboards as leaderboardRows}
					<Leaderboard rows={leaderboardRows} class="my-2" />
				{/each}
			</div>
		</Section>
	</div>
</div>
