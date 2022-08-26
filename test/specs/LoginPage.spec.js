
const expectchai = require('chai').expect
const loginPage = require('../pageObjects/loginPage')
const accountPage = require('../pageObjects/accountPage')
const constantdata = require('../utils/constant')
const configdata = require('../configData/config')
const fs = require('fs')
let credentails = JSON.parse(fs.readFileSync('test/testData/loginData.json'))



describe('login page feature test', async () => {

    credentails.forEach(({ emailid, password }) => {

        it('Invalid emailid & password scenario', async () => {

            await browser.url('/index.php?route=account/login')
            await browser.maximizeWindow()
            console.log(await browser.getTitle());
            await expect(browser).toHaveTitleContaining(constantdata.LOGIN_PAGE_TITLE);
            await loginPage.Login(emailid, password)
            await browser.pause(3000)
            await console.log(await loginPage.alert.getText())
        })

    });


    it('login Page Valid Case Sanity', async () => {

        //  this.retries(2)

        await browser.url('/index.php?route=account/login')
        await browser.maximizeWindow()
        await loginPage.Login(configdata.emailid, configdata.password)
        await accountPage.editaccount.waitForExist()
        await expect(browser).toHaveTitle(constantdata.My_account_title);
        await expect(browser).toHaveUrlContaining(constantdata.Accounturl);


    })


})

