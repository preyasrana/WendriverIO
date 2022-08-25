class AccountPage {

    get editaccount() {
        return $("//div[@class='list-group mb-3']//a[2]")
    }

    get addressbook() {
        return $("//div[@class='list-group mb-3']//a[4]")
    }





}

module.exports = new AccountPage()