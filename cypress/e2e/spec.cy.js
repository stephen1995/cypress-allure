describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('testing second scenario',()=>{
    cy.visit('google.com')
  })
})