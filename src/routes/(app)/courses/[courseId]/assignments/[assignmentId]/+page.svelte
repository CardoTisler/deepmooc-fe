<script lang="ts">
	import Placeholder from '$lib/components/Placeholder.svelte';
	import Section from '$lib/components/util/Section.svelte';
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

<div>
	<div class="bg-white h-40 flex items-end p-3 {isContrastMode ? 'black-bg' : ''}">
		<div>
			<p class="flex text-3xl font-bold dark:text-yellow-300">{title}</p>
			<p class="dark:text-yellow-300">{topic}</p>
		</div>
	</div>
	<div class="flex flex-row pt-8">
		<div class="w-full max-w-2xl pr-12">
			<!-- Body -->
			<p class="text-2xl font-semibold dark:text-yellow-300">Kirjeldus</p>
			<div class="pt-8">
				{#each tasks as task}
					<div class="flex flex-row py-2">
						<p class="pr-2 dark:text-yellow-300">{task.index}.</p>
						<p class="dark:text-yellow-300">{task.description}</p>
					</div>
					<Placeholder text="Ülesande näide" class="h-20 mb-12 mt-4" />
				{/each}
			</div>
			<Placeholder text="Faili esitamise component" class="mt-24 h-80" />
		</div>
		<Section class="max-w-md p-6 h-60 {isContrastMode ? 'black-bg' : ''}">
			<p class="gray-spaced dark:text-yellow-300">ESITUSED</p>
		</Section>
	</div>
</div>

<style>
	.black-bg {
		background: black !important;
	}
</style>
