import { test, expect, chromium } from '@playwright/test'
test('Launching chromium Binary', async () => {
    console.log('This is the first program')
    let browser = await chromium.launch({
        channel:'chrome', // for real browser . also firefox, msedge can be used
        headless: false
    });
    let context1 =  await browser.newContext();
    let context2 =  await browser.newContext();

    let page1 = await context1.newPage(); //browser - contect - page1
    let page2 = await context2.newPage();
    await page1.goto('https://www.amazon.com/')
    await page2.goto('https://www.flipkart.com/')

})