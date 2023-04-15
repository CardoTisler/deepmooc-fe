import { expect, test } from '@playwright/test';

test('Landing page button redirects to main page in student view', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('link', { name: 'Sisene' })).toBeVisible();

	await page.getByText('Sisene').click();
	expect(page.getByText('Avaleht')).toBeTruthy();
});

test('Test entire page flow, landing page -> main page -> course overview -> assignment page', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('link', { name: 'Sisene' })).toBeVisible();

	await page.getByText('Sisene').click();
	expect(page.getByText('Avaleht')).toBeTruthy();

	await page.getByTestId('course-187243').click();
	expect(page.getByText('LTAT.03.005')).toBeTruthy();

	await page.getByTestId('assignment-1-solve-button').first().click();
	expect(page.getByText('Kirjuta funktsioon, mis võtab parameetriks')).toBeTruthy();
});