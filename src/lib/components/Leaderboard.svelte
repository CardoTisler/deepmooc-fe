<script lang="ts">
	import type { LeaderboardRow } from '$lib/types';
	export let rows: LeaderboardRow[];
</script>

<div class="rounded-xl bg-gray-200 bordered">
	<!-- TODO: Should turn this into a tailwind grid -->
	<!-- TODO: Maybe also add better logic for the leaderboard row "gap" -->
	{#each rows as { index, name, score, bold }, i}
		<div class="flex flex-row justify-around w-96">
			<p class={bold ? 'font-bold' : ''}>{index}.</p>
			<p class={bold ? 'font-bold' : ''}>{name}</p>
			<p class={bold ? 'font-bold' : ''}>{score}</p>
		</div>
		{#if i == 0}
			<div class="flex flex-row justify-around w-96">
				<p>.</p>
				<p>.</p>
				<p>.</p>
			</div>
		{/if}
	{/each}
</div>
