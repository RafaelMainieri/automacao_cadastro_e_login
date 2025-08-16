const elements = require('../../fixtures/elements.json')

export default {
    enterRegisterPage() {
        cy.visit('/')
            .get(elements.homePage.imgLogo)
            .should('exist')
            .should('be.visible')

        cy.get(elements.homePage.buttons.registerPage)
            .click()

        cy.get(elements.form)
            .should('exist')
            .should('be.visible')
    },

    enterLoginPage() {
        cy.visit('/')
            .get(elements.homePage.imgLogo)
            .should('exist')
            .should('be.visible')

        cy.get(elements.homePage.buttons.loginPage)
            .click()

        cy.get(elements.form)
            .should('exist')
            .should('be.visible')
    }
}