import {browser, $,expect } from '@wdio/globals'

describe('Fitur Login',function(){
    it('user login dengan kredensial yang', async () => {
        await browser.url('https://www.saucedemo.com/')
        const loginButton = await $('input#login-button').click()
        loginButton.click()
        await browser.pause(2000)
    });
})

describe('Selector',function(){
    it('menggunakan css selector', async () => {
        await browser.url('https://www.saucedemo.com/')
        const loginButton = await $('input#login-button').click()
        loginButton.click()
        await browser.pause(2000)
    });
    it('link selector ', async () => {
        await browser.url('https://the-internet.herokuapp.com/')
        await $('=Basic Auth').click()
        await browser.pause(2000)
    });
    it('Menggunakan text selector   ', async () => {
        await browser.url('https://www.saucedemo.com/')
        const title = await $('div=Swag Labs')
        const titleText = await title.getText()
        console.log("title website ini : ",titleText)
    });
    it('menggunakan xpath selector', async () => {
        await browser.url('https://www.saucedemo.com/')
        const inputUsername = await $('//input[@data-test="username"]')
        await inputUsername.setValue('afifhernanda07')
        await browser.pause(2000)
    });
})
describe('Belajar Method', async () => {
    it('Method click', async () => {
        await browser.url('https://webdriver.io/docs/api/element/click/')
        const changeTheme = await $('.toggleButton_PEV7')
        await changeTheme.click()
        await browser.pause(2000)
    });
    it('Method GetText', async () => {
        await browser.url('https://webdriver.io/docs/api/element/getText/')
        const text = await $('.theme-doc-markdown p')
        const paragrafText  = await text.getText()
        console.log('<<<!!!!>>> Text <<<!!!!>>>', paragrafText)
        await browser.pause(2000)
    });
    it('Method setValue and getValue ,',async () => {
        await browser.url('https://duckduckgo.com/')
        const searchInput = await $('#searchbox_input')
        await searchInput.setValue('webdriverio')
        const searchInputValue = await searchInput.getValue()
        await browser.pause(3000)
        console.log('<\\\\> Ini Text nya <\\\\>',searchInputValue)
    })
})