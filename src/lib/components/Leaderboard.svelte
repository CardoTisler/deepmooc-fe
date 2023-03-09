<script lang="ts">
	import type { LeaderboardRow } from '$lib/types';
	export let rows: LeaderboardRow[];
</script>

<div class="rounded-xl bg-gray-100 border-2 border-gray-200 h-36 flex flex-col justify-evenly">
	<!-- TODO: Should turn this into a tailwind grid -->
	<!-- TODO: Maybe also add better logic for the leaderboard row "gap" -->
	{#each rows as { index, name, score, bold }, i}
		<div class="grid grid-cols-3 gap-4 w-full">
			<div class="flex justify-start pl-4"><p class={bold ? 'font-bold' : ''}>{index}.</p></div>
			<div class="flex justify-center"><p class={bold ? 'font-bold' : ''}>{name}</p></div>
			<div class="flex justify-end pr-4"><p class={bold ? 'font-bold' : ''}>{score}</p></div>
		</div>
		{#if i == 0}
			<div class="grid grid-cols-3 gap-4 w-full">
				<div class="flex justify-start pl-4">
					<p>&#8942;</p>
				</div>
				<div class="flex justify-center">
					<p>&#8942;</p>
				</div>
				<div class="flex justify-end pr-4">
					<p>&#8942;</p>
				</div>
			</div>
		{/if}
	{/each}
</div>

<style>
</style>
