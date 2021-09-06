before(() => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.contains('Add/Remove Elements').click()
  })

//Act
describe('Add Remove Elements Tests', function () {
    it('Checks Add/Remove Elements Page', function () {
        cy.url().should('include', '/add_remove_elements/')
        cy.get('#content > h3').should('have.text', 'Add/Remove Elements')
        cy.get('#page-footer > div > div').should('have.text', 'Powered by Elemental Selenium')

    })
})