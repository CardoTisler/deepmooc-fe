<script>
	import CourseOverview from '$lib/components/CourseOverview.svelte';
</script>

<svelte:head>
	<title>Avaleht</title>
	<meta name="description" content="Deepmooc avaleht" />
</svelte:head>

<div class="flex flex-col">
	<div class="bg-white bordered h-40">
		<p class="flex text-3xl font-bold">Avaleht</p>
	</div>

	<div class="flex flex-row">
		<div class="flex flex-col">
			<!-- Courses -->
			<CourseOverview courseName="Algoritmid ja andmestruktuurid" courseCode="LTAT.03.005" />
		</div>
	</div>
</div>

<style>
</style>
