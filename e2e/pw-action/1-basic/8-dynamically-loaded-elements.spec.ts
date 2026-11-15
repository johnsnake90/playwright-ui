import { expect, test } from '@playwright/test';

test.describe('Basic examples', () => {
  test('dynamically loaded elements 1', { tag: '@pwbasic' }, async ({ page }) => {
    await page.goto('/dynamic_loading/1');

    await page.getByRole('button', { name: 'start' }).click();

    await expect(page.getByRole('heading', { name: 'Hello World!' })).toBeVisible({ timeout: 10000 });

    await expect(page).toHaveTitle(/The Internet/);
  });

  test('dynamically loaded elements 2', { tag: '@pwbasic' }, async ({ page }) => {
    await page.goto('/dynamic_loading/2');

    await page.getByRole('button', { name: 'start' }).click();

    await expect(page.getByRole('heading', { name: 'Hello World!' })).toBeVisible({ timeout: 10000 });

    await expect(page).toHaveTitle(/The Internet/);
  });
});
