/// <reference types="cypress" />

import home_page from '../support/pages/home_page'
import login_page from '../support/pages/login_page'

const elements = require('../fixtures/elements.json')

const valid_user_data = require('../fixtures/valid_user_data.json')
const invalid_user_data = require('../fixtures/invalid_user_data.json')

describe('Login de usuário', () => {
    beforeEach('Acessando página de login', () => {
        home_page.enterLoginPage()
    })

    it('Login com campos vazios', () => {
        login_page.clickLoginButton()
        login_page.verifyErrorMessage(elements.loginPage.messages.email)
    }) 

    it('Login com e-mail inválido', () => {
        login_page.fillEmail(invalid_user_data.email)
        login_page.clickLoginButton()
        login_page.verifyErrorMessage(elements.loginPage.messages.email)
    })

    it('Login com e-mail válido', () => {
        login_page.fillEmail(valid_user_data.email)
        login_page.clickLoginButton()
        login_page.verifyErrorMessage(elements.loginPage.messages.password)
    })

    it('Login com senha inválida', () => {
        login_page.fillEmail(valid_user_data.email)
        login_page.fillPassword(invalid_user_data.password)
        login_page.clickLoginButton()
        login_page.verifyErrorMessage(elements.loginPage.messages.password)
    })

    it('Login com senha válida', () => {
        login_page.fillEmail(valid_user_data.email)
        login_page.fillPassword(valid_user_data.password)
        login_page.clickLoginButton()
        login_page.verifySuccessMessage(valid_user_data.email)
    })
})