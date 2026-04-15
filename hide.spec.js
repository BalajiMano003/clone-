import { test, expect } from '@playwright/test';

test('launch OrangeHRM login page', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    await page.locator('[name="username"]').fill('Admin')
    await page.locator('[name="password"]').fill('admin123')
    await page.locator('button:has-text("Login")').click()

     await page.getByText('PIM').click()

    await page.waitForTimeout(3000)

     await page.locator("(//div[@class='oxd-select-text-input'][normalize-space()='-- Select --'])[2]").click()

        await page.waitForTimeout(3000)

        const options = await page.$$("//div[@class='oxd-select-option']")
        
        for(let opt of options){

            const value = await opt.textContent()
            console.log(value)

            if(value.includes('QA Engineer'))
            {
                await opt.click()
                break;
            }
             await page.waitForTimeout(3000)
await expect(page.getByText('QA Engineer')).toBeVisible()
//await expect( page.locator('//div[@class="oxd-select-text-input" and text()="QA Engineer"]')).toHaveText('QA Engineer');
        }
});