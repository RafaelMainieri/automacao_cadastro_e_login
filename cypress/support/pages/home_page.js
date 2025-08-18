const elements = require('../../fixtures/elements/home_page.json')
const login_page_elements = require ('../../fixtures/elements/login_page.json')
const register_page_elements = require ('../../fixtures/elements/register_page.json')

export default {
    enterRegisterPage() {
        cy.visit('/')
            .get(elements.imgLogo)
            .should('exist')
            .should('be.visible')

        cy.get(elements.buttons.registerPage)
            .click()

        cy.get(register_page_elements.form)
            .should('exist')
            .should('be.visible')
    },

    enterLoginPage() {
        cy.visit('/')
            .get(elements.imgLogo)
            .should('exist')
            .should('be.visible')

        cy.get(elements.buttons.loginPage)
            .click()

        cy.get(login_page_elements.form)
            .should('exist')
            .should('be.visible')
    }
}