class LoginPage {
    selectorsList() {
        const selectors = {
            loginButton: "li > .undefined",
            emailField: "[data-cy='email']",
            passwordField: "[data-cy='password']",
            signInButton: "button.w-full",
            // wrongCredentialAlert: "[data-test='signin-error']",
            // nextButton: '[data-test="user-onboarding-next"]',
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('/heroes')
    }

    fillLoginWithRegisteredUser(username, password) {
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().emailField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signInButton).click()
    }

    // fillLoginWithInvalidUser(username, password) {
    //     cy.get(this.selectorsList().usernameField).type(username)
    //     cy.get(this.selectorsList().passwordField).type(password)
    //     cy.get(this.selectorsList().signInButton).click()
    // }

    // checkAccessInvalid() {
    //     cy.get(this.selectorsList().wrongCredentialAlert)
    // }

    checkAccessSuccess() {
        cy.get('body').should('contain', 'Create New Hero')
        cy.get('body').should('contain', 'Logout')
    }
}

export default LoginPage