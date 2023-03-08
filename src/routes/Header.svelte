<script>
	import profileIcon from '$lib/images/profile.svg';
</script>

<header class="flex flex-row justify-between bg-white shadow-md">
	<div class="flex w-32 h-16 bordered">Icon</div>

	<div class="flex flex-row w-64 h-16 bordered">
		<div class="flex flex-col">
			<p>Eesnimi Perenimi</p>
			<button class="self-end">Logi välja</button>
		</div>
		<div class="bordered ml-4 w-12">
			<img src={profileIcon} alt="profile icon" />
		</div>
	</div>
</header>

<style>
</style>
