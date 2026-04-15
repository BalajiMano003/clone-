const { test, expect } = require('@playwright/test');

test('launch Flipkart page', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');


    await page.locator('span').filter({ hasText: 'More' }).first().hover();

const items = page.locator("//ul[contains(@class,'p9yS7v') and contains(@style,'width:280px')]//li");

  await items.first().waitFor({ state: 'visible' });

// get all elements
//const allItems = await items.all();

// extended for loop
for (const item of allItems) {
  const text = await item.textContent();
  console.log(text);
}
})

