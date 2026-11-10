import { expect, test } from '@playwright/test';

test.describe('The Internet - locators', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await expect(page).toHaveTitle(/The Internet/);
    await expect(page.getByText('Login Page')).toBeVisible();
  });

  test('find by xpath', async ({ page }) => {
    const usernameInput = page.locator('//input[@id="username"]');
    const passwordInput = page.locator('//input[@id="password"]');

    await expect(usernameInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
  });

  test('find by xpath - starting from form', async ({ page }) => {
    const usernameInput = page.locator('//form//input[@id="username"]');
    const passwordInput = page.locator('//form//input[@id="password"]');

    await expect(usernameInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
  });

    test('find by xpath - using contains() function', async ({ page }) => {
    const loginButton = page.locator('//form/button/i[contains(text(), "Login")]');

    await expect(loginButton).toBeVisible();
  });
});
