import { test, expect } from '@playwright/test'

/*

1)test.only() - to run only selected tests
2)test.skip()  - to skip a test
3)test.fixme() - make a test needing a fix and skip the execution
4)test.fail() -> run a test expecting it to fail
5)test.slow() => it will triple the timeout  //30 seconds


//test.describe
to group multiple test cases into single suite

*/

test.describe('login module cases', () => {


    test.only('first test @smoke', async ({ page }) => {
        test.slow();   // 90000ms
       //

        await page.goto('https://www.amazon.in/');
        await page.locator("//input[text()='uyiuyiuyiuyiuy']").click();

        // actions 
        //assertions

    })

    test.fail('Second test @smoke', async ({ page }) => {
        await page.goto('https://www.amazon.in/');
        expect(20).toBe(30)
    })


    test('third test @regression', async ({ page }) => {
        await page.goto('https://www.amazon.in/');
    })


    test('Fourth test  @regression @jira @login', async ({ page }) => {
        await page.goto('https://www.amazon.in/');
    })

})