
import {test, expect} from '@playwright/test';

test('Locator', async({page})=>{

await page.goto('https://demoblaze.com/')

//click login button
await page.click('#login2')
//username
await page.fill('#loginusername','pavanol')

//enter user name
await page.fill('#loginpassword','test@123')

//click login

await page.click("//button[@onclick='logIn()']")

//verify logot available

   const logout = await page.locator("//li//a[@id='logout2']")

  await expect (logout).toBeVisible()
})