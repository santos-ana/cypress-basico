Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('[data-test="campoNome"]')
        .type('Ana')
    cy.get('[data-test="campoSobrenome"]')
        .type('Santos')
    cy.get('[data-test="campoDescricao"]')
        .type('Não encontrei a apostila do curso. Onde posso encontrá-la?')
    cy.contains('button', 'Enviar')
        .click()
})