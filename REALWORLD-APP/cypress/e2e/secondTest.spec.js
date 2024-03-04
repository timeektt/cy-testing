/// <reference types="cypress" />

describe('Test log out', () => {

    beforeEach('login to application', () => {
        cy.loginToApp()
    })

    it('Virify use can log out susccesfully', () => {

        cy.contains('Settings').click()
        cy.contains('Or click here to logout').click()
        cy.get('.navbar-nav').should('contain', 'Sign up')
    })


})