/// <reference types="cypress" />
describe('e-commerce site smoke tests', () => {
  it('has different departments', () => {
    cy.visit('/')

    cy.log("**men' items**")
    cy.contains('nav li', 'Men').click()
    cy.location('pathname').should('equal', '/men')

    cy.log("**women' items**")
    cy.contains('nav li', 'Women').click()
    cy.location('pathname').should('equal', '/women')

    cy.log('**all items**')
    cy.contains('nav li', 'All').click()
    cy.location('pathname').should('equal', '/all')

    cy.log('**cart**')
    cy.contains('nav li', 'Cart').click()
    cy.location('pathname').should('equal', '/cart')
    cy.get('.empty-cart').should('be.visible')
  })
})
