
const expectchai = require('chai').expect
const loginPage = require('../pageObjects/loginPage')
const accountPage = require('../pageObjects/accountPage')
const editaccountPage = require('../pageObjects/editaccountPage')

const fakerlib = require('@faker-js/faker')

describe('update myaccount details page', async () => {

    it('login Page Valid Case', async () => {

        await browser.url('/index.php?route=account/login')
        await browser.maximizeWindow()
        await loginPage.Login("testautomate@gmail.com", "test123")
        await accountPage.editaccount.waitForExist()
        await expect(browser).toHaveUrlContaining("account");
        await expect(browser).toHaveTitle("My Account");

    })

    it('update my account details info', async () => {

        await browser.maximizeWindow()
        await accountPage.editaccount.click()
        await editaccountPage.firstname.setValue(fakerlib.faker.name.firstName())
        await editaccountPage.lastname.setValue(fakerlib.faker.name.lastName())
        await editaccountPage.telephoneno.setValue(fakerlib.faker.phone.number())
        await editaccountPage.continue.click()

    })






})