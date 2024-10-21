import { test, expect } from "@playwright/test";

test(" Test 1 @smoke", async ({ page }) => {

    await page.goto('https://www.google.com');
  //  await page.screenshot({path:'tests/screenshots'+'google.png'})
    await expect(page).toHaveTitle('Google');

    console.log("this is smoke test");
});


test(" Test 2 @sanity", async ({ page }) => {

    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle('Google');
    console.log("this is sanity test");
});

test.fail(" Test 3", async ({ page }) => {

    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle('Google');
    console.log("this is regular test");
});