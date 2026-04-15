const { test, expect } = require('@playwright/test');

test('drop', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.selectOption('#colors',['Red','Blue','Green'])



})