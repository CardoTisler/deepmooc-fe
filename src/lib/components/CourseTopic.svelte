<script lang="ts">
	import { AssignmentOverview } from '.';
	import Section from './util/Section.svelte';
	let style = '';
	export { style as class };

	export let data: any;
</script>

<Section class={`flex flex-col p-8 max-w-2xl lg:max-w-5xl ${style}`}>
	<div>
		<p class="text-3xl text-semibold" aria-label="Teema pealkiri">{data.topicTitle}</p>
	</div>
	<div class="py-8" aria-label="Teema kirjeldus">
		<p>{data.topicDescription}</p>
	</div>
	<div class="flex flex-col" aria-label="Ülesanded">
		<p>ÜLESANDED</p>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			{#each data.assignments as assignment}
				<AssignmentOverview data={assignment} />
			{/each}
		</div>
	</div>
</Section>
