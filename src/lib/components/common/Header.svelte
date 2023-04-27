<script>
	import ProfileIcon from '$lib/components/icons/ProfileIcon.svelte';
	import Logo from '$lib/components/icons/Logo.svelte';
	import theme from '$lib/shared/stores/theme';

	$: isContrastMode = $theme === 'contrast';
</script>

<header
	class="bg-white shadow-md mb-2 lg:px-20 {isContrastMode
		? 'black-bg'
		: ''} dark:border-b-2 dark:border-b-yellow-300"
>
	<div class="flex flex-row justify-between header dark:border-b-yellow-300">
		<a href="/main" class="w-32 pl-4">
			<Logo fill={isContrastMode ? 'yellow' : 'black'} />
		</a>

		<div class="flex flex-row w-64 h-16 items-center">
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
	.header {
		max-width: 128rem;
		margin: 0 auto;
	}
</style>
