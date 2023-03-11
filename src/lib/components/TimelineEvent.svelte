<script lang="ts">
	import type { TimelineEventData } from '$lib/types';
	import RightArrow from './icons/RightArrow.svelte';
	import Pill from './util/Pill.svelte';

	export let data: TimelineEventData;
	const { title, subTitle, deadlineTime, deadlineDate, timeRemaining, tags } = data;
</script>

<div class="flex flex-col p-2 bordered">
	<div class="flex flex-row">
		<p class="text-xs">&#9711;</p>
		<div class="flex flex-row pl-3 w-full justify-between">
			<div>
				<p>{title}</p>
			</div>
			<div>
				<!-- TODO: Make it thinner -->
				<RightArrow stroke="black" fill="black" />
			</div>
		</div>
	</div>
	<div class="flex flex-col border-l-2 border-black pl-8">
		<div>
			<p class="font-thin">{subTitle}</p>
		</div>
		<div class="flex flex-row">
			{#each tags as tag}
				<Pill text={tag} class="mr-2 h-fit" />
			{/each}
		</div>
		<div class="grid grid-cols-2 pt-4">
			<div class="pb-2"><p class="gray-spaced">TÄHTAEG</p></div>
			<div><p class="gray-spaced">AEGA JÄÄNUD</p></div>
			<div><p class="font-medium">{deadlineTime}</p></div>
			<div><p class="font-medium">{timeRemaining}</p></div>
			<div>{deadlineDate}</div>
		</div>
	</div>
</div>
