describe('homepage', () => {
  it('goes to search page when start search', () => {
    cy.visit("http://localhost:3000");
    cy.findByTestId('start-search-button').click().then(() => {
      cy.location('pathname').should('eq', '/search')
    })
  })
  it('goes to search page when clicking on nav bar search link', () => {
    cy.visit("http://localhost:3000");
    cy.findByTestId('top-nav-search').click().then(() => {
      cy.location('pathname').should('eq', '/search')
    })
  })
  it('goes to cart page when clicking on nav bar cart link', () => {
    cy.visit("http://localhost:3000");
    cy.findByTestId('top-nav-cart').click().then(() => {
      cy.location('pathname').should('eq', '/cart')
    })
  })
})