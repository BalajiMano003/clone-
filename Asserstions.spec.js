import {test,expect} from '@playwright/test'

test('Assert',async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register')
    
   await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    console.log("Test1 passed")

   const title = await page.title()
    
   console.log(title)

   await expect(page).toHaveTitle('nopCommerce demo store. Register')

   console.log('Test2 passed')
   
  const logo = await page.getByAltText('nopCommerce demo store')
  await  expect(logo).toBeVisible()
    console.log('Test3 passed')

  const radio =  await page.locator('#gender-male').click;
  const radio1 =  await page.locator('#gender-male')
   await expect(radio1).toBeEnabled();
console.log('Test4 passed')

  const register = await page.locator("//h1[text()='Register']")
  await expect(register).toBeVisible()
  console.log('Test5 passed')

 const emailInput = page.locator('#Email')
await emailInput.fill('balaji123@gmail.com')
await expect(emailInput).toHaveValue('balaji123@gmail.com')
console.log('Test6 passed')
})