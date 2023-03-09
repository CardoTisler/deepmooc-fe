<script lang="ts">
	import type { TimelineEventData } from '$lib/types';
	import TimelineEvent from '$lib/components/TimelineEvent.svelte';

	const exampleTimelineEvent: TimelineEventData = {
		title: '6.A Kahendpuu läbimine',
		subTitle: 'ALGORITMID JA ANDMESTRUKTUURID',
		deadlineTime: '21:00',
		deadlineDate: '12.02.2023',
		timeRemaining: '3 päeva ja 8 tundi'
	};
</script>

<div class="flex flex-col ml-12 bg-white p-4 border-2 border-gray-200 rounded-xl">
	<div>
		<p class="text-lg font-thin">AJAJOON</p>
	</div>

	<TimelineEvent data={exampleTimelineEvent} />
	<TimelineEvent data={exampleTimelineEvent} />
	<TimelineEvent data={exampleTimelineEvent} />
</div>
