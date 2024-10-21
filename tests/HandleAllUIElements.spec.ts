import {test, expect} from '@playwright/test'

test(" Handle UI Elements", async ({page}) =>{

    //Navigate to URL
    await page.goto("https://demo.automationtesting.in/Register.html");


    // Handle textboxes
    await expect(page.locator("//input[@placeholder='First Name']")).toBeEnabled();
    await page.locator("//input[@placeholder='First Name']").pressSequentially('ABCD', {delay:200})

    await expect(page.locator("//input[@placeholder='Last Name']")).toBeEnabled();
    await page.locator("//input[@placeholder='Last Name']").fill('EFGH');

    // email text field

    await page.locator("//input[@type='email']").fill('test@gmail.com')
    await page.locator("//input[@type='tel']").fill('2171234678');

    // Handle Radio buttons
  //  await expect(page.locator("//input[@value='Male']")).not.toBeChecked();
  //  await expect(page.locator("//input[@value='FeMale']")).not.toBeChecked();
    await page.locator("//input[@value='Male']").click();

    //checkbox
   // await expect(page.locator("//input[@id='checkbox1']]")).toBeChecked()
  //  await page.locator("//input[@id='checkbox1']]").click();

    //Single dropdown

    // Select By Value
    await page.locator("#Skills").selectOption({value:"Android"});
    await page.waitForTimeout(1000);

     // Select By label
    await page.locator("#Skills").selectOption({label:"Analytics"});
    await page.waitForTimeout(1000);

     // Select By Index
    await page.locator("#Skills").selectOption({index:5});
    await page.close();


})