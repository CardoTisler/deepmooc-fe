<script>
	import { AccessibilityModal, Placeholder } from '$lib/components';
	import '$lib/global.css';
	import '../styles.css';

	let showAccessibilityMenu = true;
	const toggleAccessibilityMenu = () => {showAccessibilityMenu = !showAccessibilityMenu};
</script>

<div class="landing flex flex-col dark:bg-black">
	<div class="h-16 lg:w-1/2 flex flex-row justify-between shadow-sm dark:bg-black">
		<div class="w-64 h-full">
			<a href="/" class="w-8"><Placeholder text="Logo" class="h-full" /></a>
		</div>
		<div class="self-center mr-2">
			<button class="border rounded-sm p-1 dark:text-yellow-300" on:click={toggleAccessibilityMenu}>Juurdepääsetavus</button>
		</div>
	</div>

	<main>
		{#if showAccessibilityMenu}
			<div class="fixed bordered test">
				<AccessibilityModal toggleMenu={toggleAccessibilityMenu}/>
			</div>
		{/if}
		<slot />
	</main>
</div>

<style>
	@media (min-width:1024px) {
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

	.test {
		top: 50%;
		left: 50%;
	}
</style>
