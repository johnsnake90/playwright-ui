import { expect, test } from '@playwright/test';

test.describe('The Internet - login page', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await expect(page).toHaveTitle(/The Internet/);
    await expect(page.getByText('Login Page')).toBeVisible();
  });

  test('login with valid credentials', async ({ page }) => {

    //Arrange
    const login = 'tomsmith';
    const password = 'SuperSecretPassword!';
    const expectedHeading = 'Welcome to the Secure Area.';
    const loginInput = page.locator('#username');
    const passwordInput = page.locator('#password');
    const loginButton = page.locator('button[type="submit"]');

    //Act
    await loginInput.fill(login);
    await passwordInput.fill(password);
    await loginButton.click();
    
    //Assert
    await expect(page.getByRole('heading', { name: expectedHeading })).toBeVisible();
  });

});