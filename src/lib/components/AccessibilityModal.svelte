<script lang="ts">
	import { Section } from '$lib/components';
	import theme from '$lib/shared/stores/theme';
	export let toggleMenu: () => void;

	const enableContrastMode = () => {
		theme.set('contrast');
	};
	const enableLightMode = () => {
		theme.set('light');
	};
	$: isContrastMode = $theme === 'contrast';
</script>

<Section class="w-full max-w-4xl p-4 {isContrastMode ? 'black-bg' : ''}">
	<div class="flex flex-col">
		<div class="flex justify-end">
			<!-- TODO: Replace with X icon -->
			<button class="p-2 focus:border-2 focus:border-blue-600" on:click={toggleMenu}>X</button>
		</div>
		<div>
			<h3 class="dark:text-yellow-300">Juurdepääsetavus</h3>
			<p class="dark:text-yellow-300">
				Veebileht on disainitud põhimõttega, et lehel olev informatsioon ning funktsionaalsused on
				ligipääsetavad võimalikult paljudele inimestele.
			</p>
			<br />
			<!-- <p>Loe rohkem <a href="#" class="underline">juurdepääsetavusest</a></p> -->
		</div>
		<div>
			<h3 class="dark:text-yellow-300">Teksti suurus</h3>
			<p class="dark:text-yellow-300">
				Enimkasutatavad veebibrauserid pakuvad võimalust suurendada või vähendada teksti suurust
				Ctrl nupu (Cmd nupp OS X operatsioonisüsteemi korral) all hoidmise ning + või - vajutamise
				kaudu. Teine võimalus on kasutada arvutihiirt: hoides all Ctrl nuppu ning liigutades
				rullikut samaaegselt. Sätete taastamiseks saab korraga alla vajutada Ctrl ja 0.
			</p>
			<br />
		</div>
		<div>
			<h3 class="dark:text-yellow-300">Kontrast</h3>
			<br />
			<div class="flex flex-row w-full xl:w-1/2 justify-between">
				<button
					class="text-xl border-2 border-primary-200 rounded-xl py-2 px-3 hover:bg-primary-200 dark:text-yellow-300 dark:border-yellow-300 dark:hover:bg-gray-900 focus:border-blue-600 focus:first"
					on:click={enableLightMode} autofocus>Tava sätted</button
				>
				<button
					class="text-xl focus:border-2 bg-gray-800 text-white rounded-xl py-2 px-3 focus:border-blue-600 hover:bg-gray-900 dark:text-yellow-300"
					on:click={enableContrastMode}
					>Must taust ja <span class="text-yellow-300">kollane tekst</span></button
				>
			</div>
		</div>
	</div>
</Section>

<style>
</style>
