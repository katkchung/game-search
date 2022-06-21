describe('searchpage', () => {
  it('can search for video games', () => {
    cy.visit("http://localhost:3000/search");
    cy.findByTestId('search-bar-input')
    .type('Stardew Valley')
    cy.findByTestId('search-button').click()
    
  })
})