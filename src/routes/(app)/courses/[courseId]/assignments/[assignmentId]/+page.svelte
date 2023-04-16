<script lang="ts">
	import { Section, FileInput } from '$lib/components';
	import type { PageData } from './$types';
	import theme from '$lib/shared/stores/theme';

	$: isContrastMode = $theme === 'contrast';
	export let data: PageData;
	const {
		assignmentDetails: { title, topic, tasks }
	} = data;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="Assignment page" />
</svelte:head>

<div class="max-w-screen-4xl lg:px-20">
	<div class="h-40 flex items-end p-3 {isContrastMode ? 'black-bg' : ''}">
		<div>
			<h1 class="dark:text-yellow-300">{title}</h1>
			<p class="text-lg dark:text-yellow-300">{topic}</p>
		</div>
	</div>
	<div class="flex flex-row pt-8">
		<div class="w-full max-w-4xl pr-12">
			<!-- Body -->
			<h2 class="dark:text-yellow-300">Kirjeldus</h2>
			<div class="pt-8">
				{#each tasks as task}
					<div class="flex flex-row py-2">
						<p class="pr-2 dark:text-yellow-300">{task.index}.</p>
						<p class="dark:text-yellow-300">{task.description}</p>
					</div>
					<div class="mb-12 mt-4 rounded-xl py-2 px-3 border-gray-200 border-2">
						<p class="gray-spaced dark:text-yellow-300">NÄIDE</p>
						<br />
						<p class="dark:text-yellow-300">> korruta(4, 5)</p>
						<p class="dark:text-yellow-300">20</p>
					</div>
				{/each}
			</div>
			<Section class="mt-24 flex justify-center dark:bg-black">
				<FileInput />
			</Section>
		</div>
		<Section class="max-w-2xl p-6 h-80 {isContrastMode ? 'black-bg' : ''}">
			<p class="gray-spaced dark:text-yellow-300">ESITUSED</p>
		</Section>
	</div>
</div>

<style>
	.black-bg {
		background: black !important;
	}
</style>
