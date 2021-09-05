describe('My First Test', function () {
    it('Does not do much', function () {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('A/B Testing').click()
        cy.url().should('include', '/abtest')
    })
    })