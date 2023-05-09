<script lang="ts">
	import type { PageData } from './$types';
	import CourseTopic from '$lib/components/CourseTopic.svelte';
	import RightArrow from '$lib/components/icons/RightArrow.svelte';
	import Section from '$lib/components/util/Section.svelte';
	import type { LeaderboardRow } from '$lib/types';
	import { Leaderboard } from '$lib/components';
	import { exampleLeaderboardRows } from '$lib/util/consts';
	import theme from '$lib/shared/stores/theme';
	export let data: PageData;

	$: isContrastMode = $theme === 'contrast';
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

<div class="flex flex-col lg:px-20">
	<div class="flex h-40 items-end p-3">
		<div>
			<h1 class="dark:text-yellow-300" aria-label="Kursuse nimi">{courseName}</h1>
			<p class="text-lg dark:text-yellow-300" aria-label="Kursuse ainekood">{courseCode}</p>
		</div>
	</div>

	<div class="flex flex-row dark:text-yellow-300">
		<div class="flex flex-col" aria-label="Kursusel käsitletavad teemad">
			{#each topicsList as topic}
				<CourseTopic data={topic} class="mb-12 {isContrastMode ? 'black-bg' : ''}" />
			{/each}
		</div>

		<Section class="flex flex-col max-w-md ml-12 p-6 h-fit {isContrastMode ? 'black-bg' : ''}">
			<div class="flex flex-col">
				<div class="flex flex-row justify-between">
					<p class="gray-spaced dark:text-yellow-300">EDETABEL</p>
					<button on:click={() => alert('Dont know where to go')} aria-label="Edetabeli nupp">
						<RightArrow
							stroke={isContrastMode ? 'yellow' : 'text-gray-600'}
							fill={isContrastMode ? 'yellow' : 'text-gray-600'}
						/>
					</button>
				</div>
				<Leaderboard rows={exampleLeaderboardRows} class="mt-6" />
			</div>
			<div class="flex flex-col">
				<p class="gray-spaced py-6 dark:text-yellow-300">AKTIIVSED EDETABELID</p>
				{#each activeLeaderboards as leaderboardRows}
					<Leaderboard rows={leaderboardRows} class="my-2" />
				{/each}
			</div>
		</Section>
	</div>
</div>
