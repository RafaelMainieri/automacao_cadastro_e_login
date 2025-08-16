const elements = require('../../fixtures/elements.json')

export default {
    clickRegisterButton() {
        cy.get(elements.button.confirmRegister).click()
    },

    verifyErrorMessage(message) {
        cy.get(elements.messages.error)
            .should('exist')
            .should('be.visible')
            .should('have.text', message)
    },

    fillName(name) {
        cy.get(elements.field.name)
            .should('exist')
            .should('be.visible')
            .type(name)
    },

    fillEmail(email) {
        cy.get(elements.field.email)
            .should('exist')
            .should('be.visible')
            .type(email)
    },

    fillPassword(password) {
        cy.get(elements.field.password)
            .should('exist')
            .should('be.visible')
            .type(password)
    },

    verifySuccessMessage(name) {
        cy.get(elements.messages.titleSuccessRegister)
            .should('exist')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')
        
        cy.get(elements.messages.subtitleSuccessRegister)
            .should('exist')
            .should('be.visible')
            .should('have.text', `Bem-vindo ${name}`)
    }
}