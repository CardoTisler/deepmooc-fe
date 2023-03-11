<script>
	import ProfileIcon from '$lib/components/icons/ProfileIcon.svelte';
	import Placeholder from '$lib/components/Placeholder.svelte';
</script>

<header class="flex flex-row justify-between bg-white shadow-md mb-2">
	<a href="/main" class="w-64 pl-4"><Placeholder text="Logo" class="h-full" /></a>

	<div class="flex flex-row w-64 h-16">
		<div class="flex flex-col">
			<p>Eesnimi Perenimi</p>
			<a href="/" class="no-underline">Logi välja</a>
		</div>
		<div class="ml-4 w-12">
			<ProfileIcon />
		</div>
	</div>
</header>

<style>
</style>
