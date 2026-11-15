import { expect, test } from '@playwright/test';

test.describe('Basic examples', () => {

  test('dropdown - single select', { tag: '@pwbasic' }, async ({ page }) => {
    await page.goto('/dropdown');

    //Select option by value
    await page.locator('#dropdown').selectOption('1');

    //Select option by label
    await page.locator('#dropdown').selectOption('Option 2');

    await expect(page).toHaveTitle(/The Internet/);

  });

    test('dropdown - multiple select', { tag: '@pwbasic' }, async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/multiple_dropdown');

    //Select option by value
    await page.locator('#multiple-dropdown').selectOption(['1', '2']);

    //Select option by label
    await page.locator('#multiple-dropdown').selectOption(['Option 1', 'Option 3']);

    await expect(page).toHaveTitle(/The Internet/);

  });

});