const { test, expect } = require('@playwright/test');

test('drop', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const dorps = await page.$$("#country option")
    let status = false;
    for(let drop of dorps){

        const value = (await drop.textContent()).trim( )

        console.log(value)

        if (value === 'Australia') {

          status = true;
          break
        }
    }
    expect(status).toBeTruthy();
    await page.waitForTimeout(5000);
})