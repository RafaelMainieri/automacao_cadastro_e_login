const elements = require('../../fixtures/elements/login_page.json')

export default {
    clickLoginButton() {
        cy.get(elements.buttons.confirmLogin)
            .click()
    },

    verifyErrorMessage(message) {
        cy.get(elements.fields.errorMessage)
            .should('exist')
            .should('be.visible')
            .should('have.text', message)
    },

    fillEmail(email) {
        cy.get(elements.fields.email)
            .type(email)
    },

    fillPassword(password) {
        cy.get(elements.fields.password)
            .type(password)
    },

    verifySuccessMessage(user) {
        cy.get(elements.fields.titleSuccessLogin)
            .should('exist')
            .should('be.visible')
            .should('have.text', 'Login realizado')

        cy.get(elements.fields.subtitleSuccessLogin)
            .should('exist')
            .should('be.visible')
            .should('have.text', `Olá, ${user}`)
    }
}