const elements = require('../../fixtures/elements/register_page.json')

export default {
    clickRegisterButton() {
        cy.get(elements.buttons.confirmRegister).click()
    },

    verifyErrorMessage(message) {
        cy.get(elements.fields.errorMessage)
            .should('exist')
            .should('be.visible')
            .should('have.text', message)
    },

    fillName(name) {
        cy.get(elements.fields.name)
            .should('exist')
            .should('be.visible')
            .type(name)
    },

    fillEmail(email) {
        cy.get(elements.fields.email)
            .should('exist')
            .should('be.visible')
            .type(email)
    },

    fillPassword(password) {
        cy.get(elements.fields.password)
            .should('exist')
            .should('be.visible')
            .type(password)
    },

    verifySuccessMessage(name) {
        cy.get(elements.fields.titleSuccessRegister)
            .should('exist')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')
        
        cy.get(elements.fields.subtitleSuccessRegister)
            .should('exist')
            .should('be.visible')
            .should('have.text', `Bem-vindo ${name}`)
    }
}