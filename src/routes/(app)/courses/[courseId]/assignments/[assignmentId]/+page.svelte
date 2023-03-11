<script lang="ts">
	import Placeholder from '$lib/components/Placeholder.svelte';
	import Section from '$lib/components/util/Section.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const {
		assignmentDetails: { title, topic, tasks }
	} = data;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="Assignment page" />
</svelte:head>

<div class="">
	<div class="bg-white h-40 flex items-end p-3">
		<div>
			<p class="flex text-3xl font-bold">{title}</p>
			<p>{topic}</p>
		</div>
	</div>
	<div class="flex flex-row pt-8">
		<div class="w-full max-w-2xl pr-12">
			<!-- Body -->
			<p class="text-2xl font-semibold">Kirjeldus</p>
			<div class="pt-8">
				{#each tasks as task}
					<div class="flex flex-row py-2">
						<p class="pr-2">{task.index}.</p>
						<p>{task.description}</p>
					</div>
					<Placeholder text="Ülesande näide" class="h-20 mb-12 mt-4" />
				{/each}
			</div>
			<Placeholder text="Faili esitamise component" class="mt-24 h-80" />
		</div>
		<Section class="max-w-md p-6 h-60">
			<p class="gray-spaced">ESITUSED</p>
		</Section>
	</div>
</div>
