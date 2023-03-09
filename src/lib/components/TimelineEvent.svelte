<script lang="ts">
	import type { TimelineEventData } from '$lib/types';
	import RightArrow from './icons/RightArrow.svelte';
	import Pill from './util/Pill.svelte';

	export let data: TimelineEventData;
	const { title, subTitle, deadlineTime, deadlineDate, timeRemaining } = data;
</script>

<div class="flex flex-col p-2 bordered">
	<div class="flex flex-row">
		<p class="text-xs">&#9711;</p>
		<div class="flex flex-row pl-3">
			<p>{title}</p>
			<span class="pl-4">
				<!-- TODO: Make it thinner -->
				<RightArrow stroke="black" fill="black" />
			</span>
		</div>
	</div>
	<div class="flex flex-col border-l-2 border-black pl-8">
		<div>
			<p class="font-thin">{subTitle}</p>
		</div>
		<div class="flex flex-row">
			<Pill text="lihtne" class={'mr-2 h-fit'} />
			<Pill text="7 punkti" class={'mr-2'} />
		</div>
		<div class="grid grid-cols-2 pt-4">
			<div class="pb-2"><p class="tracking-wider text-gray-600">TÄHTAEG</p></div>
			<div><p class="tracking-wider text-gray-600">AEGA JÄÄNUD</p></div>
			<div><p class="font-medium">{deadlineTime}</p></div>
			<div><p class="font-medium">{timeRemaining}</p></div>
			<div>{deadlineDate}</div>
		</div>
	</div>
</div>
