import userData from '../fixtures/users/userData.json'
import DashboardPage from '../pages/dashboardPage.js'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage
const dashboardPage = new DashboardPage
const { use } = require("chai")

describe('Orange HRM Tests', () => {

  it('Login - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.passoword)
    dashboardPage.checkDashboardPage()
  })

  it('Login - Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.passoword)
    loginPage.checkInvalidAcess()
  })
})