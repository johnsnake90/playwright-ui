import { expect, test } from '@playwright/test';

test.describe('The Internet - locators', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/custom_dropdown');
    await expect(page).toHaveTitle(/The Internet/);
    await expect(page.getByText('Custom Dropdown')).toBeVisible();
  });

  test('get by pw additional methods - roles with filters', async ({ page }) => {

    const dropdown = page.getByRole('combobox').filter({ hasText: 'Choose a fruit'});
    const fruitList = page.getByRole('listbox');
    const apple = fruitList.filter({hasText: 'Apple'});

    await expect(dropdown).toBeVisible();
    await dropdown.click();

    await expect(fruitList).toBeVisible();
    await apple.click();

  });
});
