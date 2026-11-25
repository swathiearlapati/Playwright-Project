import { test, expect } from '@playwright/test'



test.describe.serial('login module cases', () => {


    test('first test @smoke', async ({ page }) => {
        test.slow();   // 90000ms
       //

        await page.goto('https://www.amazon.in/');
        await page.locator("//input[text()='uyiuyiuyiuyiuy']").click();

        // actions 
        //assertions

    })

    test('Second test @smoke', async ({ page }) => {
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