<script lang="ts">
	import Pill from '$lib/components/util/Pill.svelte';
	import type { AssignmentOverview } from '$lib/types';
	import RightArrow from './icons/RightArrow.svelte';
	export let data: AssignmentOverview;
	import theme from '$lib/shared/stores/theme';

	$: isContrastMode = $theme === 'contrast';
	const { assignmentId, topic, tags, title, deadlineTime, deadlineDate, completed, courseId } =
		data;
</script>

<!-- TODO: Need to accept and handle courseId for redirecting to courses/:courseId/assignments/:assignmentId -->
<div
	class="flex flex-col bg-gray-100 rounded-xl lg:h-36 p-2 border-gray-200 border-2 max-w-xl dark:bg-black dark:border-yellow-300"
>
	<div class="flex flex-col lg:flex-row justify-between">
		<div class=""><p>{topic}</p></div>
		<div class="flex flex-row justify-start lg:justify-end">
			{#each tags as tag}
				<div class="mx-1">
					<Pill text={tag} />
				</div>
			{/each}
		</div>
	</div>
	<div class="w-full py-2">
		<p class="text-xl font-bold">{title}</p>
	</div>
	<div class="flex flex-row w-full justify-between pt-3">
		<div class="flex flex-col">
			<p class="font-bold">{deadlineTime}</p>
			<p class="font-thin">{deadlineDate}</p>
		</div>
		<div class="flex items-center">
			{#if completed}
				<button
					class="border border-gray-700 text-gray-600 p-2 rounded-sm disabled dark:bg-gray-900"
					><span class="dark:text-yellow-300">Lahendatud</span></button
				>
			{:else}
				<a
					class="bg-primary-200 text-white hover:bg-primary-300 rounded-sm p-2 flex flex-row dark:bg-black dark:border-2 dark:border-yellow-300 dark:bg-gray-900 hover:dark:bg-black"
					href={`/courses/${courseId}/assignments/${assignmentId}`}
				>
					<span class="dark:text-yellow-300">Lahenda</span>
					<span class="pl-2">
						<RightArrow
							fill={`${isContrastMode ? 'yellow' : 'white'}`}
							stroke={`${isContrastMode ? 'yellow' : 'white'}`}
						/>
					</span>
				</a>
			{/if}
		</div>
	</div>
</div>

<style></style>
