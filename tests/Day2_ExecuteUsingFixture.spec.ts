import {test,expect} from '@playwright/test'

// test use ({
//     browserName = 'firefox',
//     headless:false
// })
test('running in different binaries and browsers', async ({page})=>{   // Browser => browser context => page
await page.goto('https://www.amazon.com/');
})


test('test2', async ({page})=>{ // Browser => browser context => page
await page.goto('https://www.amazon.com/');
await page.waitForTimeout(10000) // for page to keep open for a while but not recommended
})


test('test3', async ({page})=>{   // Browser => browser context => page
await page.goto('https://www.amazon.com/');
})


test('test4', async ({page})=>{   // Browser => browser context => page
await page.goto('https://www.amazon.com/');
})

test('test5', async ({page})=>{   // Browser => browser context => page
await page.goto('https://www.amazon.com/');
})

test('test6', async ({page})=>{   // Browser => browser context => page
await page.goto('https://www.amazon.com/');
})


test('test7', async ({page})=>{   // Browser => browser context => page
await page.goto('https://www.amazon.com/');
})

test('test8', async ({page})=>{   // Browser => browser context => page
await page.goto('https://www.amazon.com/');
})

test('test9', async ({page})=>{   // Browser => browser context => page
await page.goto('https://www.amazon.com/');
})

test('test10', async ({page})=>{   // Browser => browser context => page
await page.goto('https://www.amazon.com/');
})





//browser navigation methods 
//browser information

//locators => 

//login 