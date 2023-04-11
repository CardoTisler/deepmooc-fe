<script lang="ts">
	import RightArrow from '$lib/components/icons/RightArrow.svelte';
</script>

<div class="content grid grid-cols-1 justify-end">
	<div />
	<div class="lg:w-1/2 pl-16 h-1/2">
		<p class="text-4xl font-semibold pb-12 tracking-wide">Tooru</p>
		<p class="text-gray-600 text-xl pb-16">
			Pole midagi stressirohkemat, kui liiga vähe stressi. Tere tulemast koodipõrgusse.
		</p>
		<a href="/main" class="w-28 text-white flex flex-row bg-primary-200 hover:bg-primary-300 p-2 rounded-md">
			Sisene
			<span class="ml-3">
				<RightArrow />
			</span>
		</a>
	</div>
	<div />
	<div class="flex flex-row self-end w-full h-1/2 pl-16">
		<div class="flex flex-row w-1/4 justify-evenly text-gray-600">
			<p>Terms</p>
			<p>Privacy</p>
		</div>
		<div class="flex w-3/4 justify-end pr-16 text-gray-600">
			<p>&#169; 2023 DeepMOOC</p>
		</div>
	</div>
</div>

<style>
	.content {
		height: 100vh;
	}
</style>
