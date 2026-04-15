const {test,expect} =require('@playwright/test')
test('Home page',async({page})=>{

await page.goto('https://demoblaze.com/')

 const pageTitle = page.title()
console.log('pagetitle is' + pageTitle)
await expect(page).toHaveTitle('STORE')

await expect(page).toHaveURL('https://demoblaze.com/')
page.close()
})