<script lang="ts">
	export let text: string;
	let style = '';
	export { style as class };
</script>

<div class="rounded-full bg-gray-200 px-2 {style}">
	<span class="text-gray-600">{text}</span>
</div>
