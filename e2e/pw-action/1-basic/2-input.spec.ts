import { expect, test } from '@playwright/test';

test.describe('Basic examples', () => {
  test('page', { tag: ['@pwbasic', "@wip"] }, async ({ page }) => {
    await page.goto('/login', { waitUntil: 'load' });
    await page.fill('#username', 'michael');
    //await page.fill('#username', 'michael', { force: true });

    //Use instead of page.type()
    await page.locator('#username').pressSequentially('michael', { delay: 1000 });

    await expect(page.getByText('Login Page')).toBeVisible();

  })
})