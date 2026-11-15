import { expect, test } from '@playwright/test';

test.describe('Basic examples', () => {

  test('radio button - single checked', { tag: '@pwbasic' }, async ({ page }) => {
    await page.goto('/radio_buttons');

    await page.locator('#red').check();
    await expect(page.locator('#red')).toBeChecked();
    await expect(page.locator('#blue')).not.toBeChecked();
    await expect(page.locator('#green')).not.toBeChecked();

    await expect(page.locator('#result')).toContainText(/red/);
    await expect(page).toHaveTitle(/The Internet/);

  });

});