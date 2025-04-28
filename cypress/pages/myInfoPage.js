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

    editMyInfo() {
        cy.get(this.selectorsList().firstNameField).clear().type('Thiago')
        cy.get(this.selectorsList().middleNameField).clear().type('Henrique')
        cy.get(this.selectorsList().lastNameField).clear().type('Kuninari')
        cy.get(this.selectorsList().genericField).eq(3).clear().type('1')
        cy.get(this.selectorsList().genericField).eq(4).clear().type('OtherId Test')
        cy.get(this.selectorsList().genericField).eq(5).clear().type('Drivers license number teste')
        cy.get(this.selectorsList().dateField).eq(0).clear().type('2025-03-10')
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().generiComboBox).eq(0).click({force: true})
        cy.get(this.selectorsList().fourfhItemComboBox).click()
        cy.get(this.selectorsList().generiComboBox).eq(1).click({force: true})
        cy.get(this.selectorsList().thirdItemComboBox).click()
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
}

export default MyInfoPage
