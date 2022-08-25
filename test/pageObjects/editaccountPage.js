class EditAccountPage {

    get firstname() {
        return $("input[name='firstname']")
    }
    get lastname() {
        return $("input[name='lastname']")
    }

    get telephoneno() {
        return $("input[name='telephone']")
    }

    get continue() {
        return $("//input[@value='Continue']")
    }


}

module.exports = new EditAccountPage()