<script>
	import ProfileIcon from '$lib/components/icons/ProfileIcon.svelte';
	import Placeholder from '$lib/components/Placeholder.svelte';
</script>

<header class="flex flex-row justify-between bg-white shadow-md">
	<a href="/" class="w-64"><Placeholder text="Logo" class="h-full" /></a>

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
