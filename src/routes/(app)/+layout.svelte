<script>
	import Header from '$lib/components/common/Header.svelte';
	import '$lib/global.css';
	import '../styles.css';
</script>

<div class="app dark:bg-black">
	<Header />

	<main>
		<slot />
	</main>

	<footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		/* max-width: 64rem; */
		max-width: 128rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
