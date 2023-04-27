<script lang="ts">
	import { AssignmentOverview, Leaderboard, Section } from '$lib/components';
	import type { CourseOverviewData } from '$lib/types';
	import RightArrow from './icons/RightArrow.svelte';
	import theme from '$lib/shared/stores/theme';

	$: isContrastMode = $theme === 'contrast';
	let style = '';
	export { style as class };

	export let data: CourseOverviewData;
	const { courseId, courseName, courseCode, leaderboardRows: rows, nextAssignment } = data;
</script>

<Section
	class={`p-8 grid grid-cols-1 gap-4 lg:gap-10 max-w-2xl lg:max-w-5xl lg:min-w-lg ${
		isContrastMode ? 'black-bg' : ''
	} ${style}`}
>
	<div class="flex flex-row justify-between" aria-label={`Kursuse ${courseName} ülevaade`}>
		<div>
			<h2 class="dark:text-yellow-300">{courseName}</h2>
			<p class="gray-spaced dark:text-yellow-300" aria-label={`Kursuse kood: ${courseCode}`}>{courseCode}</p>
		</div>
		<div class="ml-16 lg:ml-0 flex items-center">
			<a href={`/courses/${courseId}`} data-testid={`course-${courseId}`} aria-label={`Sisene kursusele ${courseName}`}
				><RightArrow
					fill={isContrastMode ? 'yellow' : 'black'}
					stroke={isContrastMode ? 'yellow' : 'black'}
				/></a
			>
		</div>
	</div>
	<div class="grid grid-cols-1 2xl:grid-cols-2 gap-8">
		<!-- TODO: What if there is no leaderboard? -->
		<div class="flex flex-col dark:text-yellow-300 dark:bg-black" aria-label="Edetabeli komponent">
			<p>EDETABEL</p>
			<Leaderboard {rows} />
		</div>
		<!-- TODO: What if there is no next assignment? -->
		<div class="flex flex-col dark:text-yellow-300" aria-label="Järgmise ülesande komponent">
			<p>JÄRGMINE ÜLESANNE</p>
			<AssignmentOverview data={nextAssignment} />
		</div>
	</div>
</Section>
