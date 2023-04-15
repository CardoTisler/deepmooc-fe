<script lang="ts">
	import { Section } from '$lib/components';
</script>

<div class="w-full bordered h-80 flex flex-row test">
	<Section class="w-1/2 p-4 h-fit">
		<form action="?/assignment" method="POST" enctype="multipart/form-data">
			<label for="file-upload">Upload file</label>
			<input
				id="file-upload"
				type="file"
				name="assignment"
				placeholder="assignment"
				class="input-file"
			/>
			<button type="submit" class="bg-primary-200 border hover:bg-primary-300 py-2 px-3 rounded-md"
				><p>Lae fail üles</p></button
			>
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

	label {
		background: url('/export-button-svgrepo-com.svg');
		display: block;
		text-indent: -9999px;
		width: 100px;
		height: 82px;
		background-size: 100px 82px;
		cursor: pointer;
	}

	.test {
		margin: 0 auto;
	}
</style>
