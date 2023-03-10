<script lang="ts">
	import type { TimelineEventData } from '$lib/types';
	import TimelineEvent from '$lib/components/TimelineEvent.svelte';
	import Section from './util/Section.svelte';

	export let eventsList: TimelineEventData[];
</script>

<Section class="flex flex-col ml-12 p-4 max-w-lg">
	<div>
		<p class="text-lg font-thin">AJAJOON</p>
	</div>
	{#each eventsList as data}
		<TimelineEvent {data} />
	{/each}
</Section>
