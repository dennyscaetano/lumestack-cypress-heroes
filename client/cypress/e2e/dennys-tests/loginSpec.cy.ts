import LoginPage from '../../pages/loginPage'
import userData from '../../fixtures/users/user-data.json'

const loginPage = new LoginPage()
describe('Login com sucesso', () => {
    it('Deve fazer login com um usuário válido', () => {

        loginPage.accessLoginPage()
        loginPage.fillLoginWithRegisteredUser(userData.userSuccess.username, userData.userSuccess.password)
        loginPage.checkAccessSuccess()

    })
})