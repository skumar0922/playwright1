import { test, expect } from "@playwright/test";

/*
test.skip()
test.skipWithCondition()
test.only()
test.fail()
test.failWithCondition()
test.fixme()
test.slow()
test.slowWithCondition();
*/

test.describe.skip('Suite 1', async() =>{
    test.beforeAll(async({browser}) =>{
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

    test(" Navigate to Google.com", async({page}) => {

        await page.goto('https://www.google.com');
        await expect(page).toHaveTitle('Google');
        });
})

// Skip with Condition
test('skip in webkit', async({page, browserName}) =>{
    test.skip(browserName == 'webkit', "This feature is not implemented yet");
    console.log("This is skip with condition ")
})


// Fail with condition
test('Fail in webkit', async({page, browserName}) =>{
    test.fail(browserName == 'webkit', "This feature is not implemented yet");
    console.log("This is fail with condition ")
})

// slow with condition
test('slow in webkit', async({page, browserName}) =>{
    test.slow(browserName == 'webkit', "This feature is not implemented yet");
    console.log("This is fail with condition ")
})

// fixme 
test.fixme('fixme in webkit', async({page}) =>{

    console.log("This is skip with condition ")
})



