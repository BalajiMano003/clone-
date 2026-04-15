const { test, expect } = require('@playwright/test');

test('susdrop test', async ({ page }) => {
    await page.goto('https://www.redbus.in/');
    // Add your test logic here

   await page.locator(':text-is("From")').fill('Coimbatore')
 await page.waitForTimeout(2000)
       await page.waitForSelector("//div[contains(@class,'suggestion-item hoverHighlight')]");

  const options = await page.$$("//div[contains(@class, 'suggestion-item hoverHighlight')]")

    for(const opt of options){

        let value =(await(opt).textContent()).trim()
        console.log(value)
        if(value.includes('Gandhipuram, Coimbatore')){

            await opt.click()
            break;
        }else{
            console.log('no element found')
        }
           }

           
           await page.waitForTimeout(5000)
await expect(page.locator(':text-is("From")')).toHaveValue('Gandhipuram, Coimbatore');
})