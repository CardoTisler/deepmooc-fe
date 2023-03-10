<script lang="ts">
	import Pill from '$lib/components/util/Pill.svelte';
	import type { AssignmentOverview } from '$lib/types';
	import RightArrow from './icons/RightArrow.svelte';
	export let data: AssignmentOverview;

	const { topic, tags, title, deadlineTime, deadlineDate, completed } = data;
</script>

<!-- TODO: Need to accept and handle courseId for redirecting to courses/:courseId/assignments/:assignmentId -->
<div class="flex flex-col bg-gray-100 rounded-xl h-36 p-2 border-gray-200 border-2 max-w-xl">
	<div class="flex flex-row justify-between">
		<div class="w-1/2"><p>{topic}</p></div>
		<div class="flex flex-row w-1/2 justify-end">
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
				<button class="btn-disabled text-gray-600 px-2 py-1 rounded-sm">Lahendatud</button>
			{:else}
				<button
					class="btn-accent rounded-sm px-2 py-1 flex flex-row"
					on:click={() => alert('go to courses/:courseId/assignments/:assignmentId')}
				>
					Lahenda
					<span class="pl-2">
						<RightArrow />
					</span>
				</button>
			{/if}
		</div>
	</div>
</div>
