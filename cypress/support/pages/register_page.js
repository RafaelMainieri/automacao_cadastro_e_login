const elements = require('../../fixtures/elements.json')

export default {
    clickRegisterButton() {
        cy.get(elements.registerPage.buttons.confirmRegister).click()
    },

    verifyErrorMessage(message) {
        cy.get(elements.registerPage.fields.errorMessage)
            .should('exist')
            .should('be.visible')
            .should('have.text', message)
    },

    fillName(name) {
        cy.get(elements.registerPage.fields.name)
            .should('exist')
            .should('be.visible')
            .type(name)
    },

    fillEmail(email) {
        cy.get(elements.registerPage.fields.email)
            .should('exist')
            .should('be.visible')
            .type(email)
    },

    fillPassword(password) {
        cy.get(elements.registerPage.fields.password)
            .should('exist')
            .should('be.visible')
            .type(password)
    },

    verifySuccessMessage(name) {
        cy.get(elements.registerPage.fields.titleSuccessRegister)
            .should('exist')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')
        
        cy.get(elements.registerPage.fields.subtitleSuccessRegister)
            .should('exist')
            .should('be.visible')
            .should('have.text', `Bem-vindo ${name}`)
    }
}