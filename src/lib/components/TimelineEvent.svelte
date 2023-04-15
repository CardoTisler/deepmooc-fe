<script lang="ts">
	import type { TimelineEventData } from '$lib/types';
	import RightArrow from './icons/RightArrow.svelte';
	import Pill from './util/Pill.svelte';
	import theme from '$lib/shared/stores/theme';

	$: isContrastMode = $theme === 'contrast';
	export let data: TimelineEventData;
	const {
		title,
		subTitle,
		deadlineTime,
		deadlineDate,
		timeRemaining,
		tags,
		assignmentId,
		courseId
	} = data;
</script>

<!-- TODO: Replace side border and HTML circle with appropriate SVG -->
<div class="flex flex-col p-2 dark:text-yellow-300">
	<div class="flex flex-row">
		<div class="flex flex-row pl-3 w-full justify-between">
			<div>
				<h3>{title}</h3>
			</div>
			<div>
				<a href={`/courses/${courseId}/assignments/${assignmentId}`}>
					<RightArrow
						stroke={`${isContrastMode ? 'yellow' : 'black'}`}
						fill={`${isContrastMode ? 'yellow' : 'black'}`}
					/>
				</a>
			</div>
		</div>
	</div>
	<div class="flex flex-col border-l border-gray-400 pl-8">
		<div>
			<p class="gray-spaced dark:text-yellow-300">{subTitle}</p>
		</div>
		<div class="flex flex-row">
			{#each tags as tag}
				<Pill text={tag} class="mr-2 h-fit" />
			{/each}
		</div>
		<div class="grid grid-cols-2 pt-4">
			<div class="pb-2"><p class="gray-spaced dark:text-yellow-300">TÄHTAEG</p></div>
			<div><p class="gray-spaced dark:text-yellow-300">AEGA JÄÄNUD</p></div>
			<div><p class="font-medium">{deadlineTime}</p></div>
			<div><p class="font-medium">{timeRemaining}</p></div>
			<div>{deadlineDate}</div>
		</div>
	</div>
</div>
