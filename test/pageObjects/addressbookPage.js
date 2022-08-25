class AddressBookPage {

    get btn_newaddress() {
        return $("//a[@class='btn btn-primary'][contains(text(),'New Address')]")
    }


    get firstname() {
        return $("#input-firstname")
    }
    get lastname() {
        return $("#input-lastname")
    }

    get company() {
        return $("#input-company")
    }

    get address_line1() {
        return $("#input-address-1")
    }
    get address_line2() {
        return $("#input-address-2")
    }

    get city() {
        return $("#input-city")
    }

    get postcode() {
        return $("#input-postcode")
    }

    get country() {
        return $("#input-country")
    }

    get state() {
        return $("#input-zone")
    }

    get defaultaddress() {
        return $$(".form-check-input")
    }




    get btn_continue() {
        return $("//input[@value='Continue']")
    }


}

module.exports = new AddressBookPage()