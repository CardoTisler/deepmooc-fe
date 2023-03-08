<script lang="ts">
	import { Assignment, Leaderboard } from '.';
	import { exampleLeaderboardRows } from '$lib/util/consts';
	export let courseName: string;
	export let courseCode: string;
</script>

<div class="p-8 flex flex-col bordered rounded-xl bg-white">
	<div class="flex flex-row justify-between">
		<div>
			<p class="text-4xl font-bold">{courseName}</p>
			<p class="font-thin">{courseCode}</p>
		</div>
		<div>
			<p>-></p>
		</div>
	</div>
	<div class="flex flex-row">
		<div class="flex flex-col">
			<p>EDETABEL</p>
			<Leaderboard rows={exampleLeaderboardRows} />
		</div>

		<div class="flex flex-col">
			<p>JÄRGMINE ÜLESANNE</p>
			<Assignment />
		</div>
	</div>
</div>
