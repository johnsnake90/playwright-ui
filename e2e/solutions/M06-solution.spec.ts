import { expect, test } from '@playwright/test';
import { IssueTableModel } from '../../src/models/issue.table.model';

test.describe('M06 - solution', () => {
  test('create an issue', { tag: '@pwbasic' }, async ({ page }) => {
    await page.goto('https://pwts.dev/examples/ui/issue-form.html');

    //Arrange
    const nameInput = page.locator('input[id=nameInput]');
    const email = page.locator('input[id=emailInput]');
    const description = page.locator('textarea[id=errorDescription]');
    const errorCategory = page.locator('#errorCategory');
    const problem1 = page.locator('input[id=checkbox1]');
    const problem2 = page.locator('input[id=checkbox2]');
    const problem3 = page.locator('input[id=checkbox3]');
    const urgency1 = page.locator('input[id=radio1]');
    const urgency2 = page.locator('input[id=radio2]');
    const urgency3 = page.locator('input[id=radio3]');
    const browsers = page.locator('select[id=browserType]');
    const dynamicInput = page.locator('input[id=slowInput]');
    const data = {
      name: 'Tomasz',
      email: 'tomasz@test.pl',
      description: 'Coś się zepsuło i nie było mnie słychać',
      category: 'techniczny',
      browsers: ['chrome', 'firefox'],
      additionalInfo: 'Nic do dodania',
    };

    //Act
    await nameInput.fill(data.name);
    await email.fill(data.email);
    await description.fill(data.description);
    await errorCategory.selectOption(data.category);
    await problem1.check();
    await problem2.check();
    await urgency1.check();
    await browsers.selectOption(data.browsers);
    await expect(dynamicInput).toBeVisible({ timeout: 10000 });
    await dynamicInput.fill(data.additionalInfo);

    //Assert
    await expect(errorCategory).toHaveValue(data.category);
    await expect(problem1).toBeChecked();
    await expect(problem2).toBeChecked();
    await expect(problem3).not.toBeChecked();
    await expect(urgency1).toBeChecked();
    await expect(urgency2).not.toBeChecked();
    await expect(urgency3).not.toBeChecked();
    await expect(browsers).toHaveValues(data.browsers);

    await page.locator('button[type="submit"]').click();

    await expect(page.getByRole('heading', { name: 'Podsumowanie zgłoszenia błędu' })).toBeVisible();
  });

  test('number of critical issues is below 5', { tag: ['@M06', '@solution'] }, async ({ page }) => {
    // Arrange
    const issues: IssueTableModel[] = [];
    const priority = 'Krytyczny';

    await page.goto('https://pwts.dev/examples/ui/issues-table.html');

    // Act
    const rows = await page.locator('table tbody tr').all();

    for (const row of rows) {
      const cells = await row.locator('td').all();

      const issueTableModel: IssueTableModel = {
        title: await cells[0].innerText(),
        description: await cells[1].innerText(),
        priority: await cells[2].innerText(),
        firstName: await cells[3].innerText(),
        lastName: await cells[4].innerText(),
        email: await cells[5].innerText(),
        status: await cells[6].innerText(),
      };

      issues.push(issueTableModel);
    }

    // Assert
    const criticalIssues = issues.filter((issue) => issue.priority === priority);
    expect(criticalIssues.length).toBeLessThan(5);
  });
});
