<script lang="ts">
	import RightArrow from '$lib/components/icons/RightArrow.svelte';
	import theme from '$lib/shared/stores/theme';
	import type { PageData } from './$types';
	export let data: PageData;

	const { backendAccessible } = data;
	$: isContrastMode = $theme === 'contrast';
</script>

<svelte:head>
	<title>Tooru</title>
	<meta name="description" content="Tooru landing page" />
</svelte:head>

<div class="content grid grid-cols-1 dark:bg-black justify-end lg:w-1/2">
	<div />
	<div class="lg:w-1/2 pl-16 h-1/2">
		<p class="text-4xl font-semibold pb-12 tracking-wide dark:text-yellow-300">Tooru</p>
		<p class="text-gray-600 text-xl pb-16 dark:text-yellow-300">
			Pole midagi stressirohkemat, kui liiga vähe stressi. Tere tulemast koodipõrgusse.
		</p>
		<a
			href={backendAccessible ? 'http://localhost:8080/api/general/me' : '/main'}
			class="w-28 text-white flex flex-row bg-primary-200 hover:bg-primary-300 p-2 rounded-md dark:bg-black dark:border-2 dark:border-yellow-300"
			tabindex="0"
			aria-label="Sisene veebilehele"
		>
			<span class="dark:text-yellow-300">Sisene</span>
			<span class="ml-3">
				<RightArrow
					fill={isContrastMode ? 'yellow' : 'white'}
					stroke={isContrastMode ? 'yellow' : 'white'}
				/>
			</span>
		</a>
	</div>
	<div />
	<div class="flex flex-row self-end w-full h-1/2 pl-16">
		<div class="flex flex-row w-1/4 justify-evenly text-gray-600 dark:text-yellow-300">
			<p aria-label="Tingimused">Terms</p>
			<p aria-label="Privaatsuseeskirjad">Privacy</p>
		</div>
		<div class="flex w-3/4 justify-end pr-16 text-gray-600 dark:text-yellow-300">
			<p>&#169; 2023 DeepMOOC</p>
		</div>
	</div>
</div>

<style>
	.content {
		height: 100vh;
	}
</style>
