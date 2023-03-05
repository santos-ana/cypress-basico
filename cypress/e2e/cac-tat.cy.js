/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

  beforeEach (() => {
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', function() {
    cy.title()
    .should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', function() {
    cy.get('[data-test="campoNome"]')
    .type('Ana')
    cy.get('[data-test="campoSobrenome"]')
    .type('Santos')
    cy.get('[data-test="campoEmail"]')
    .type('firmino.anac@gmail.com')
    cy.get('[data-test="campoTelefone"]')
    .type('85986933977')
    cy.get('[data-test="campoDescricao"]')
    .type('Não encontrei a apostila do curso. Onde posso encontrá-la?')
    cy.get("[data-test=botaoEnviar")
    .click()
    cy.get(".success")
    .should("be.visible")
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
    cy.get('[data-test="campoNome"]')
    .type('Ana')
    cy.get('[data-test="campoSobrenome"]')
    .type('Santos')
    cy.get('[data-test="campoEmail"]')
    .type('firmino.anac.gmail.com')
    cy.get('[data-test="campoTelefone"]')
    .type('85986933977')
    cy.get('[data-test="campoDescricao"]')
    .type('Não encontrei a apostila do curso. Onde posso encontrá-la?')
    cy.get("[data-test=botaoEnviar")
    .click()
    cy.get(".error")
    .should("be.visible")
  })

  it('validar se que o campo telefone fica vazio ao ser digitado um valor não-numérico', function() {
    cy.get('[data-test="campoTelefone"]')
    .type('Ana')
    .should('be.empty')
  })
})