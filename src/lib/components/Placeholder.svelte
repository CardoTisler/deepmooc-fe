<script lang="ts">
	export let text = 'placeholder';
	let style = '';
	export { style as class };
</script>

<div
	class="flex flex-col w-full border-dashed border-2 border-purple-400 rounded-xl text-center text-purple-400 align-center justify-center {style}"
>
	<p class="justify-center">{text}</p>
</div>

<style>
</style>
