<script>
	import ProfileIcon from '$lib/components/icons/ProfileIcon.svelte';
	import Placeholder from '$lib/components/Placeholder.svelte';
	import theme from '$lib/shared/stores/theme';

	$: isContrastMode = $theme === 'contrast';
</script>

<header class="bg-white shadow-md mb-2 {isContrastMode ? 'black-bg' : ''} dark:border-b-2 dark:border-b-yellow-300">
	<div class="flex flex-row justify-between px-20 dark:border-b-yellow-300">
		<a href="/main" class="w-64 pl-4"><Placeholder text="Logo" class="h-full" /></a>

		<div class="flex flex-row w-64 h-16">
			<div class="flex flex-col">
				<p class="dark:text-yellow-300">Eesnimi Perenimi</p>
				<a href="/" class="no-underline dark:text-yellow-300">Logi välja</a>
			</div>
			<div class="ml-4 w-12">
				<ProfileIcon />
			</div>
		</div>
	</div>
</header>

<style>
	.black-bg {
		background: black !important;
	}
</style>
