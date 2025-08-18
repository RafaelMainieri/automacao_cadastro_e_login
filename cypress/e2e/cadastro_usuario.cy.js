/// <reference types="cypress" />

import home_page from '../support/pages/home_page'
import register_page from '../support/pages/register_page'

const valid_user_data = require('../fixtures/valid_user_data.json')
const invalid_user_data = require('../fixtures/invalid_user_data.json')

const elements = require('../fixtures/elements/register_page.json')

describe('Cadastro de Usuário', () => {
    beforeEach('Acessando a página de cadastro', () => {
        home_page.enterRegisterPage()
    })

    it('Cadastro com campos vazios', () => {
        register_page.clickRegisterButton()
        register_page.verifyErrorMessage(elements.messages.name)
    })

    it('Cadastro com campo e-mail vazio', () => {
        register_page.fillName(valid_user_data.name)
        register_page.clickRegisterButton()
        register_page.verifyErrorMessage(elements.messages.email)
    })

    it('Cadastro com campo e-mail inválido', () => {
        register_page.fillName(valid_user_data.name)
        register_page.fillEmail(invalid_user_data.email)
        register_page.clickRegisterButton()
        register_page.verifyErrorMessage(elements.messages.email)
    })

    it('Cadastro com campo email válido', () => {
        register_page.fillName(valid_user_data.name)
        register_page.fillEmail(valid_user_data.email)
        register_page.clickRegisterButton()
        register_page.verifyErrorMessage(elements.messages.password)
    })

    it('Cadastro com campo senha inválido', () => {
        register_page.fillName(valid_user_data.name)
        register_page.fillEmail(valid_user_data.email)
        register_page.fillPassword(invalid_user_data.password)
        register_page.clickRegisterButton()
        register_page.verifyErrorMessage(elements.messages.password)
    })
        
    it('Cadastro com sucesso', () => {
        register_page.fillName(valid_user_data.name)
        register_page.fillEmail(valid_user_data.email)
        register_page.fillPassword(valid_user_data.password)
        register_page.clickRegisterButton()
        register_page.verifySuccessMessage(valid_user_data.name)
    })

})