import { expect, test } from '@playwright/test';

test.describe('Basic examples', () => {

  test('checkbox - check, uncheck', { tag: '@pwbasic' }, async ({ page }) => {
    await page.goto('/checkboxes');

    await page.getByRole('checkbox').first().check();
    await page.getByRole('checkbox').last().uncheck();

    await expect(page).toHaveTitle(/The Internet/);

  });

});