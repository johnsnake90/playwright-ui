import { expect, test } from '@playwright/test';

test.describe('Basic examples', () => {
  test('page', { tag: '@pwbasic' }, async ({ page }) => {
    await page.goto('/notification_message_rendered');

    // 1. innerHTML() - returns the HTML content of the element, tags and text
    const innerHtml = await page.innerHTML('#content');
    expect(innerHtml).toContain('Notification Message');

    // 2 innerText() - returns the visible text of the element
    // It will be your default choice for checking the text content
    const innerText = await page.innerText('#content');
    expect(innerText).toContain('Notification Message');

    const textContent = await page.textContent('#content');
    expect(textContent).toContain('Notification Message');
    const getAttribute = await page.getAttribute('#content', 'class');
    expect(getAttribute).toContain('large-12');

    await expect(page.getByText('Some rudimentary examples include')).toBeVisible();

  })
})