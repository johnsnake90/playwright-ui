import { expect, test } from '@playwright/test';

test.describe('The Internet - locators', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await expect(page).toHaveTitle(/The Internet/);
    await expect(page.getByText('Login Page')).toBeVisible();
  });

  test('get by text', async ({ page }) => {
    const loginButton = page.getByText("Login").last();
    await expect(loginButton).toBeVisible();
  });
});
