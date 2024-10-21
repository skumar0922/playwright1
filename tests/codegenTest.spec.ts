import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Sign in').click();
  await page.getByLabel('Email or phone').click();
  await page.getByLabel('Email or phone').fill('hello@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
});