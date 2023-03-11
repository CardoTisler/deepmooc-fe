<script>
	import Placeholder from '$lib/components/Placeholder.svelte';
	import '../styles.css';
</script>

<div class="landing flex flex-col">
	<div class="h-16 w-1/2 items-start shadow-sm">
		<div class="w-64 h-full">
			<a href="/" class="w-8"><Placeholder text="Logo" class="h-full" /></a>
		</div>
	</div>

	<main class="w-1/2">
		<slot />
	</main>
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.landing {
		min-height: 100vh;
		background: linear-gradient(to right, white 0%, white 50%, whitesmoke 50%, whitesmoke 100%);
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
	}
</style>
