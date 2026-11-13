import { expect, test } from '@playwright/test';

test.describe('Basic examples', () => {
  test('page', { tag: '@pwbasic' }, async ({ page }) => {

    // Navigation options
    await page.goto('/', { waitUntil: 'load' });
    await page.reload();
    await page.goBack();
    await page.goForward();
    await expect(page.getByText(/Welcome to the-internet/)).toBeVisible();

    // Locator
    page.locator('#id');
    page.getByRole('button', { name: 'Submit' });

    // Actions
    await page.click('#button');
    await page.click('#button', { clickCount: 10 });
    await page.click('#addToCart', { button: 'right' });
    await page.click('#addToCart', { modifiers: ['Alt', 'Control'] });
    await page.dblclick('#addToCart');
    await page.check('#checkbox');
    await page.uncheck('#checkbox');
    await page.fill("#email", "tomek@test.dev");

    // Assertions
    await expect(page.getByText('context')).toBeVisible();
    

  })
})