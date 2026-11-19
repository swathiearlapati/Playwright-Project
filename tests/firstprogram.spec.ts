/*
Browser: its actual browser instance launched by your playwright 

//binary 
//real browser


*/

/*

  browser context : separate browser session created inside a browser

  each browser context will have separate:

  cookies 
  local storage 
  session storage
  cache and session related state
  

  */
/*
page: inviducal browser tab with in the browser context

A browser context can contain multiple tabs


*/


import { test, expect, chromium } from '@playwright/test'

// test('Launching chromium Binary', async () => {

//     console.log('this is first program')
//     let browser = await chromium.launch({
//         headless: false
//     });

//     let context1 = await browser.newContext();
//     let context2 = await browser.newContext();

//     let page1 = await context1.newPage();
//     let page2 = await context1.newPage();

//     await page1.goto('https://www.amazon.in/')
//     await page2.goto('https://www.flipkart.com/')

// })


test('Launching chrome by using fixture', async ({page}) => {

    //call the methods 

    //assertions
    await page.goto('https://www.amazon.in/')
    
})


test('Test 2', async ({page}) => {
    await page.goto('https://www.amazon.in/')


})


test('Test 3', async ({page}) => {
    await page.goto('https://www.amazon.in/')


})


// test('Ternaryoperator @login', async ({page}) => {
//     let age:number = 200;
    
//     let result = age>=18 ? "eligible":"noteligible";

//     console.log(result)

// })