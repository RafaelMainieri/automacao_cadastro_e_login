const elements = require('../../fixtures/elements.json')

export default {
    clickLoginButton() {
        cy.get(elements.loginPage.buttons.confirmLogin)
            .click()
    },

    verifyErrorMessage(message) {
        cy.get(elements.loginPage.fields.errorMessage)
            .should('exist')
            .should('be.visible')
            .should('have.text', message)
    },

    fillEmail(email) {
        cy.get(elements.loginPage.fields.email)
            .type(email)
    },

    fillPassword(password) {
        cy.get(elements.loginPage.fields.password)
            .type(password)
    },

    verifySuccessMessage(user) {
        cy.get(elements.loginPage.fields.titleSuccessLogin)
            .should('exist')
            .should('be.visible')
            .should('have.text', 'Login realizado')

        cy.get(elements.loginPage.fields.subtitleSuccessLogin)
            .should('exist')
            .should('be.visible')
            .should('have.text', `Olá, ${user}`)
    }
}