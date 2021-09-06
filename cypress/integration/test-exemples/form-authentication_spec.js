/// <reference types="cypress" />

//Arrange
//User credentials
let username = 'tomsmith'
let password = 'SuperSecretPassword!'

//Act
describe('Form Authentication Tests', function () {
    before(() => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('Form Authentication').click()
      })
    
    it('Checks Login Page', function () {
        cy.url().should('include', '/login')
        cy.get('#content > div > h2').should('have.text', 'Login Page')
        cy.get('#content > div > h4').should('have.text', 'This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.')
        cy.get('#login > div:nth-child(1) > div > label').should('have.text', 'Username')
        cy.get('#login > div:nth-child(2) > div > label').should('have.text', 'Password')
        cy.get('#login > button > i').should('have.text', ' Login')
        cy.get('#page-footer > div > div').should('have.text', 'Powered by Elemental Selenium')
    })
    it('Logins', function () {
        cy.get('#username').type(username).should('have.value', username)
        cy.get('#password').type(password).should('have.value', password)
        cy.get('#login > button').click()
    })
    it('Checks Login Succes Page', function () {
        cy.url().should('include', '/secure')
        cy.contains('You logged into a secure area!')
        cy.get('#content > div > h2').should('have.text', ' Secure Area')
        cy.get('#content > div > h4').should('have.text', 'Welcome to the Secure Area. When you are done click logout below.')
        cy.get('#content > div > a > i').should('have.text', ' Logout')
        cy.get('#page-footer > div > div').should('have.text', 'Powered by Elemental Selenium')
    })

    it('Checks Logout Succes', function () {
        cy.get('#content > div > a > i').click()
        cy.url().should('include', '/login')
        cy.get('#content > div > h2').should('have.text', 'Login Page')
    })
})