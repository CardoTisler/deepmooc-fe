<script lang="ts">
	import { Section } from '$lib/components';
	import theme from '$lib/shared/stores/theme';
	$: isContrastMode = $theme === 'contrast';
	let hasSelectedFile = false;
</script>

<div class="w-fit h-80 flex items-center justify-center dark:bg-black">
	<Section class="w-fit p-4 {isContrastMode ? 'black-bg' : ''}">
		<form action="?/assignment" method="POST" enctype="multipart/form-data">
			<label for="file-upload" class={isContrastMode ? 'label-bg-yellow' : 'label-bg-black'}
				>Upload file</label
			>
			<input
				id="file-upload"
				type="file"
				name="assignment"
				placeholder="assignment"
				class="input-file"
				on:change={() => {
					hasSelectedFile = true;
				}}
			/>
			{#if hasSelectedFile}
				<button
					type="submit"
					class="bg-primary-200 border hover:bg-primary-300 py-2 px-3 rounded-md dark:bg-black dark:text-yellow-300 dark:border-yellow-300 dark:hover:bg-gray-700"
				>
					<p>Lae fail üles</p>
				</button>
			{/if}
		</form>
	</Section>

	<!-- <Section class="w-1/2 p-4 h-fit">

    </Section> -->
</div>

<style>
	.input-file {
		width: 0.1px;
		height: 0.1px;
		opacity: 0;
		overflow: hidden;
		position: absolute;
		z-index: -1;
	}
	.label-bg-black {
		background: url('/export-button-svgrepo-com.svg');
		display: block;
		text-indent: -9999px;
		width: 100px;
		height: 82px;
		background-size: 100px 82px;
		cursor: pointer;
	}

	.label-bg-yellow {
		background: url('/export-button-svgrepo-com-yellow.svg');
		display: block;
		text-indent: -9999px;
		width: 100px;
		height: 82px;
		background-size: 100px 82px;
		cursor: pointer;
	}
	:global(.black-bg) {
		background: black;
	}
</style>
