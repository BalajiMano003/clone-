import {test, expect} from '@playwright/test'

test("Softassert", async({page})=>{



    await page.goto('https://demo.nopcommerce.com/register')
    
   await expect.soft(page).toHaveURL('https://demo.nopcommerce123.com/register')

    console.log("Test1 passed")

   const title = await page.title()
    
   console.log(title)

   await expect.soft(page).toHaveTitle('nopCommerce demo store. Register')

   console.log('Test2 passed')
   
  const logo = await page.getByAltText('nopCommerce demo store')
  await  expect(logo).toBeVisible()
    console.log('Test3 passed')

  const radio =  await page.locator('#gender-male').click;
  const radio1 =  await page.locator('#gender-male')
   await expect(radio1).toBeEnabled();
console.log('Test4 passed')

})