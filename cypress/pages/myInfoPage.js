class MyInfoPage {

    selectorsList() {
        const selectors =  {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            tabIndex: ".oxd-select-text-input",
            generiComboBox: ".oxd-select-text--arrow",
            thirdItemComboBox: ".oxd-select-dropdown > :nth-child(3)",
            fourfhItemComboBox: ":nth-child(4) > span"
        }

        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, licenseExpiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    fillStatus() {
        cy.get(this.selectorsList().generiComboBox).eq(0).click({force: true})
        cy.get(this.selectorsList().fourfhItemComboBox).click()
        cy.get(this.selectorsList().generiComboBox).eq(1).click({force: true})
        cy.get(this.selectorsList().thirdItemComboBox).click()
    }
}

export default MyInfoPage
