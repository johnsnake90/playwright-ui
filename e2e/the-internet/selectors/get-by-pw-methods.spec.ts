import { expect, test } from '@playwright/test';

test.describe('The Internet - locators', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await expect(page).toHaveTitle(/The Internet/);
    await expect(page.getByText('Login Page')).toBeVisible();
  });

  test('get by pw methods', async ({ page }) => {
    const usernameInput = page.getByLabel('Username');
    const passwordInput = page.getByLabel('Password');
    const loginButton = page.getByRole('button', { name: 'Login' });

    await expect(usernameInput).toBeVisible();
    await expect(passwordInput).toBeVisible();

    await usernameInput.fill('username');
    await passwordInput.fill('password');
    await loginButton.click();

    await expect(page.getByText('Your usename is invalid!')).toBeVisible();
  });
});
