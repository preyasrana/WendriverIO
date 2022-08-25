



class LoginPage {

    get emailid() {
        return $("//input[@id='input-email']")
    }
    get password() {
        return $("//input[@id='input-password']")
    }

    get alert() {
        return $("//div[@class='alert alert-danger alert-dismissible']")
    }

    get signIn() {
        return $("//input[@value='Login']")
    }








    async Login(emailid, password) {
        await this.emailid.setValue(emailid)
        await this.password.setValue(password)
        await this.signIn.click()

    }


}

module.exports = new LoginPage()