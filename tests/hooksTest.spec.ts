import {test, expect} from '@playwright/test'

let page;

test.beforeAll(async({browser}) =>{
    page = await browser.newPage();
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    console.log("Before All hook");
})

test.beforeEach(async() =>{
    console.log("Before Each hook");
})


test.afterEach(async() =>{
    console.log("After Each hook");
})

test.afterAll(async() =>{
    console.log("After All hook");
})

test("Test 1: Handle Alert Elements", async () =>{

    // Handling ALERTS
   // await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    await page.waitForLoadState();

   // await expect(page.locator("//button[normalize-space()='Click for JS Alert']")).toBeVisible();


    await page.on('dialog', async(alert) =>{
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS Alert');
        await alert.accept();
        await expect(page.locator("//p[@id='result']")).toHaveText('You successfully clicked an alert')
    })
    await page.locator("//button[normalize-space()='Click for JS Alert']").click();

  //  await page.pause();

})


test("Test 2: Handle Alert Elements", async () =>{

    // Handling ALERTS
  //  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    await page.waitForLoadState();

   // await expect(page.locator("//button[normalize-space()='Click for JS Alert']")).toBeVisible();


    await page.on('dialog', async(alert) =>{
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS Alert');
        await alert.accept();
        await expect(page.locator("//p[@id='result']")).toHaveText('You successfully clicked an alert')
    })
  //  await page.locator("//button[normalize-space()='Click for JS Alert']").click();

  //  await page.pause();

})

