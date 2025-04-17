import userData from '../fixtures/users/userData.json'
const { use } = require("chai")

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type= 'submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']"

  }

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.passoword)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Thiago')
    cy.get(selectorsList.middleNameField).clear().type('Henrique')
    cy.get(selectorsList.lastNameField).clear().type('Kuninari')
    cy.get(selectorsList.genericField).eq(3).clear().type('1')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherId Test')
    cy.get(selectorsList.genericField).eq(5).clear().type('Drivers license number teste')
    cy.get(selectorsList.dateField).eq(0).clear().type('2025-03-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.passoword)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})