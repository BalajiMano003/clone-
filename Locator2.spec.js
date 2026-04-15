
import {test, expect} from '@playwright/test';
import { type } from 'node:os';

test('Locator', async({page})=>{

 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//logo
const logo = await page.getByAltText('company-branding')
expect(logo).toBeVisible;

//username
await page.getByPlaceholder('Username').fill('Admin')

//password
await page.getByPlaceholder('password').fill('admin123')

//login
await page.getByRole('button',{type:'submit'}).click()

//expect

const user =await page.locator("//p[@class='oxd-userdropdown-name']").textContent()

await expect(await page.getByText(user)).toBeVisible

})