import userData from '../fixtures/users/userData.json'
import DashboardPage from '../pages/dashboardPage.js'
import LoginPage from '../pages/loginPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage
const dashboardPage = new DashboardPage
const menuPage = new MenuPage
const myInfoPage = new MyInfoPage
const { use } = require("chai")

describe('Orange HRM Tests', () => {

  it.only('User Info Update - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.passoword)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.editMyInfo()
  })  

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.passoword)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})