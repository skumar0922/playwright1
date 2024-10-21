import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://login.salesforce.com/');
  await expect(page).toHaveTitle('Login | Salesforce');

  // Element locator by ID
  await expect(page.locator('#signup_link')).toBeVisible();
  await expect(page.locator('#signup_link')).toHaveText('Try for Free')
  await page.locator('#signup_link').click();

  //   await page.locator('#signup_link').dblclick();
  //   await page.locator('#signup_link').click('selector', { button: 'right' });

  const currentUrl = page.url();
  await expect(currentUrl).toContain('https://www.salesforce.com/form/signup/');



//   await page.getByRole('link', { name: 'Try for Free' }).click();
//   await page.getByLabel('First name').click();
   await page.getByLabel('First name').pressSequentially('kumar');
//   await page.getByLabel('First name').press('Tab');
//   await page.getByLabel('Last name').fill('battula');
//   await page.getByLabel('Last name').press('Tab');
//   await page.getByLabel('Job title').fill('QA');
//   await page.getByLabel('Job title').press('Tab');
//   await page.getByLabel('Email').fill('test@gmail.com');
//   await page.getByLabel('Email').press('Tab');
//   await page.getByLabel('Phone').fill('1234567890');
//   await page.getByLabel('Employees').selectOption('10');
//   await page.getByLabel('Company', { exact: true }).click();
//   await page.getByLabel('Company', { exact: true }).fill('TestCompany');
//   await page.locator('.msaCheckbox > div > .field > .checkbox-ui').click();
//   await page.getByRole('button', { name: 'start my free trial' }).click();
  await page.close();
});