
const expectchai = require('chai').expect
const loginPage = require('../pageObjects/loginPage')
const accountPage = require('../pageObjects/accountPage')
const addressPage = require('../pageObjects/addressbookPage')
const constantdata = require('../utils/constant')
const configdata = require('../configData/config')
const fakerlib = require('@faker-js/faker')



describe('AddressBook page related functionality', async () => {

    it('login Page Valid Case -Smoke', async () => {


        await browser.url('/index.php?route=account/login')
        await browser.maximizeWindow()
        await loginPage.Login(configdata.emailid, configdata.password)
        await accountPage.editaccount.waitForExist()
        await expect(browser).toHaveTitle(constantdata.My_account_title);
        await expect(browser).toHaveUrlContaining(constantdata.Accounturl);

    })

    it('add addressbook details -Smoke', async () => {

        await browser.maximizeWindow()
        await accountPage.addressbook.click()
        await addressPage.btn_newaddress.click()
        await addressPage.firstname.setValue(fakerlib.faker.name.firstName())
        await addressPage.lastname.setValue(fakerlib.faker.name.lastName())
        await addressPage.company.setValue(fakerlib.faker.company.companyName())

        await addressPage.address_line1.setValue(fakerlib.faker.address.streetAddress())
        await addressPage.address_line2.setValue(fakerlib.faker.address.streetName())
        await addressPage.city.setValue(fakerlib.faker.address.cityName())
        await addressPage.postcode.setValue(fakerlib.faker.address.zipCodeByState())


        //dropdown Item selection 
        const drpcountry = await addressPage.country
        drpcountry.selectByVisibleText("India")
        await browser.pause(2000)

        //chai library assertion used
        expectchai(await drpcountry.getValue()).to.equal("99")


        const drpstate = await addressPage.state
        drpstate.selectByVisibleText("Gujarat")
        await browser.pause(2000)
        expectchai(await drpstate.getValue()).to.equal("1485")

        //radiobutton Item selection 

        const defaultaddress = await addressPage.defaultaddress
        const dfaddress = defaultaddress[0]
        dfaddress.click()

        const dfaddress1 = defaultaddress[1]
        dfaddress1.click()
        await browser.pause(3000)

        await addressPage.btn_continue.click()


    })






})