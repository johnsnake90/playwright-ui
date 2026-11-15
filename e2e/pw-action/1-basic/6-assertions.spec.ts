import { expect, test } from '@playwright/test';

test.describe('Basic examples', () => {

  test('checkbox - single select', { tag: '@pwbasic' }, async ({ page }) => {
    await page.goto('/checkboxes');

    await page.getByRole('checkbox').first().check();
    await page.getByRole('checkbox').last().uncheck();

    //Use web assertions async methods toBeChecked(), toBeEditable() etc. instead of generic
    //https://playwright.dev/docs/test-assertions
    await expect(page.getByRole('checkbox').first()).toBeChecked();
    await expect(page.getByRole('checkbox').last()).not.toBeChecked();

    await expect(page).toHaveTitle(/The Internet/);

  });

});