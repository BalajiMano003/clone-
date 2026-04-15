import {test,expect} from '@playwright/test'

test ('actions',async({page})=>{


await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

await expect.soft(page).toHaveURL('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')

const email = await page.locator("#username")

await expect(email).toBeEmpty();
await expect(email).toBeEnabled();
await expect(email).toBeVisible();

await email.fill('balaji')

// test2
const checkbox = page.locator("input[role='checkbox']")
//await expect(checkbox).toBeEnabled()
await expect(checkbox).not.toBeChecked()

await checkbox.check()
await expect(checkbox).toBeChecked()

// test3
await expect(checkbox).toBeChecked()
console.log('test3 passed')
})