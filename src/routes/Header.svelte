<script>
	import ProfileIcon from '$lib/components/icons/ProfileIcon.svelte';
</script>

<header class="flex flex-row justify-between bg-white shadow-md">
	<div class="flex w-32 h-16 bordered"><a href="/" class="w-full">Icon</a></div>

	<div class="flex flex-row w-64 h-16 bordered">
		<div class="flex flex-col">
			<p>Eesnimi Perenimi</p>
			<button class="self-end">Logi välja</button>
		</div>
		<div class="bordered ml-4 w-12">
			<ProfileIcon />
		</div>
	</div>
</header>

<style>
</style>
