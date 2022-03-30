import{
  userEmail
} from '../../fixtures/example.json'

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://accounts.labs.livechat.com')
  })

  it('check secrets', () => {
    cy.get('#email')
      .type(userEmail)
      .should('have.value', userEmail)
    })
})