<script lang="ts">
	import type { TimelineEventData } from '$lib/types';
	import TimelineEvent from '$lib/components/TimelineEvent.svelte';
	import Section from './util/Section.svelte';
	import theme from '$lib/shared/stores/theme';

	$: isContrastMode = $theme === 'contrast';
	export let eventsList: TimelineEventData[];
</script>

<Section class="flex flex-col ml-12 p-4 max-w-lg {isContrastMode ? 'black-bg' : ''}">
	<div>
		<p class="text-lg font-thin dark:text-yellow-300">AJAJOON</p>
	</div>
	{#each eventsList as data}
		<TimelineEvent {data} />
	{/each}
</Section>
