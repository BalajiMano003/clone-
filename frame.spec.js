const { test, expect } = require('@playwright/test');

test('launch frames demo page', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    const allframe = page.frames();
    console.log(allframe.length);

//approch 1
//    const frame = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});
//     await frame.locator("//input[@name='mytext1']").fill('hello')

//approch2

const D = await page.frameLocator("//frame[@src='frame_1.html']").locator("//input[@name='mytext1']")
D.fill("Hello") 

await page.waitForTimeout(5000)


await expect (D).toHaveValue("Hello")
});