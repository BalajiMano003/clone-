import {test,expect } from '@playwright/test'

test('Locatormulti', async ({page})=> {

    await page.goto('https://demoblaze.com/')

    //example1:
    const links = await page.$$('a')

    for( const link of links){

       const text=  await link.textContent()
        console.log("Test 1" + text)
    }
    //product example 2
    await page.waitForSelector("//div[@id='tbodyid']//h4//a")

const product = await page.$$("//div[@id='tbodyid']//h4//a")

for (const newproduc of product) {
    const final = await newproduc.textContent()
    console.log("test22222222 " + final.trim())
}


    
})