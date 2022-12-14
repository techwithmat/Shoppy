describe('Search functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('should be able to search for a product', () => {
    cy.get('#search-input').type('apple{enter}')
    cy.url().should('eq', Cypress.config().baseUrl + '/search?q=apple')
  })

  it('should not be able to search for a product if the input is empty', () => {
    cy.get('#search-input').type('{enter}')
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })
})
