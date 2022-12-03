describe('homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('basic test', () => {
    cy.get('header h4').should('have.length', 1)
    cy.get('header h4').first().should('have.text', ' VISUAL ARTIST ')
  })
})
