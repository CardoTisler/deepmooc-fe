<script>
	import { AccessibilityModal } from '$lib/components';
	import '$lib/global.css';
	import '../styles.css';
	import theme from '$lib/shared/stores/theme';
	import Logo from '$lib/components/icons/Logo.svelte';
	$: isContrastMode = $theme === 'contrast';

	let showAccessibilityMenu = false;
	const toggleAccessibilityMenu = () => {
		showAccessibilityMenu = !showAccessibilityMenu;
	};
</script>

<div class="landing flex flex-col {isContrastMode ? 'black-bg' : ''}">
	<div class="h-16 lg:w-1/2 flex flex-row justify-between shadow-sm">
		<div class="ml-4 h-full">
			<a href="/" class=""><Logo fill={isContrastMode ? 'yellow' : 'black'} /></a>
		</div>
		<div class="self-center mr-2">
			<button
				class="border-2 rounded-sm p-1 dark:text-yellow-300 focus:border-blue-600"
				on:click={toggleAccessibilityMenu}>Juurdepääsetavus</button
			>
		</div>
	</div>

	<main>
		{#if showAccessibilityMenu}
			<div class="fixed modal-position flex">
				<AccessibilityModal toggleMenu={toggleAccessibilityMenu} />
			</div>
		{/if}
		<slot />
	</main>
</div>

<style>
	@media (min-width: 1024px) {
		.landing {
			min-height: 100vh;
			background: linear-gradient(to right, white 0%, white 50%, whitesmoke 50%, whitesmoke 100%);
		}
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
	}
	.black-bg {
		background: black !important;
	}
	.modal-position {
		top: 0%;
		left: 50%;
	}
</style>
