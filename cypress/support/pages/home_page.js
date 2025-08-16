const elements = require('../../fixtures/elements.json')

export default {
    enterRegisterPage() {
        cy.visit('/')
            .get(elements.image.logo)

        cy.get(elements.button.registerPage)
            .click()

        cy.get(elements.registerForm)
            .should('exist')
            .should('be.visible')
    }
}