import { test, expect } from '@playwright/test';
import { snapshot } from 'node:test';

test('test', async ({ page, context }) => {
  
 // await context.tracing.start({snapshots:true, screenshots:true})
  await page.goto('https://www.google.com/');
  await page.getByLabel('Sign in').click();
  await page.getByLabel('Email or phone').click();
  await page.getByLabel('Email or phone').fill('hello@gmail.com');
  await page.getByRole('button', { name: 'Nextasd' }).click();
 // await context.tracing.stop({path:'trace.zip'});

});