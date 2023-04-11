<script lang="ts">
	import Pill from '$lib/components/util/Pill.svelte';
	import type { AssignmentOverview } from '$lib/types';
	import RightArrow from './icons/RightArrow.svelte';
	export let data: AssignmentOverview;

	const { assignmentId, topic, tags, title, deadlineTime, deadlineDate, completed, courseId } =
		data;
</script>

<!-- TODO: Need to accept and handle courseId for redirecting to courses/:courseId/assignments/:assignmentId -->
<div class="flex flex-col bg-gray-100 rounded-xl lg:h-36 p-2 border-gray-200 border-2 lg:container max-w-xl">
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
				<button class="border border-gray-700 text-gray-600 p-2 rounded-sm disabled">Lahendatud</button>
			{:else}
				<a
					class="bg-primary-200 text-white hover:bg-primary-300 rounded-sm p-2 flex flex-row"
					href={`/courses/${courseId}/assignments/${assignmentId}`}
				>
					Lahenda
					<span class="pl-2">
						<RightArrow />
					</span>
				</a>
			{/if}
		</div>
	</div>
</div>

<style>
	.container {
		min-width: 360px;
	}
</style>