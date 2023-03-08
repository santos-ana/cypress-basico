/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {

  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', function () {
    cy.title()
      .should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', function () {
    cy.get('[data-test="campoEmail"]')
      .type('firmino.anac@gmail.com')
    cy.get('[data-test="campoTelefone"]')
      .type('99999999999')
    cy.fillMandatoryFieldsAndSubmit()
    cy.get(".success")
      .should("be.visible")
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
    cy.get('[data-test="campoEmail"]')
      .type('firmino.anac.gmail.com')
    cy.get('[data-test="campoTelefone"]')
      .type('99999999999')
    cy.fillMandatoryFieldsAndSubmit()
    cy.get(".error")
      .should("be.visible")
  })

  it('valida se o campo telefone fica vazio ao ser digitado um valor não-numérico', function () {
    cy.get('[data-test="campoTelefone"]')
      .type('Ana')
      .should('be.empty')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
    cy.get('[data-test="campoEmail"]')
      .type('firmino.anac@gmail.com')
    cy.get("input[id='phone-checkbox']").check()
    cy.fillMandatoryFieldsAndSubmit()
    cy.get(".error")
      .should("be.visible")
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', function () {
    cy.get('[data-test="campoNome"]')
      .type('Ana')
      .should('have.value', 'Ana')
      .clear()
      .should('be.empty')
    cy.get('[data-test="campoSobrenome"]')
      .type('Santos')
      .should('have.value', 'Santos')
      .clear()
      .should('be.empty')
    cy.get('[data-test="campoEmail"]')
      .type('firmino.anac@gmail.com')
      .should('have.value', 'firmino.anac@gmail.com')
      .clear()
      .should('be.empty')
    cy.get('[data-test="campoTelefone"]')
      .type('99999999999')
      .should('have.value', '99999999999')
      .clear()
      .should('be.empty')
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function () {
    cy.contains('button', 'Enviar')
      .click()
    cy.get(".error")
      .should("be.visible")
  })

  it('seleciona um produto (YouTube) por seu texto', function () {
    cy.get('select')
      .select('YouTube')
      .should('have.value', 'youtube')
  })

  it('seleciona um produto (Mentoria) por seu valor (value)', function () {
    cy.get('select')
      .select('mentoria')
      .should('have.value', 'mentoria')
  })

  it('seleciona um produto (Blog) por seu índice', function () {
    cy.get('select')
      .select(1)
      .should('have.value', 'blog')
  })

  it('marca cada tipo de atendimento', function () {
    cy.get('input[type="radio"]')
      .should('have.length', 3)
      .each(function ($radio) {
        cy.wrap($radio)
          .check()
          .should('be.checked')
      })
  })

  it('marca ambos checkboxes, depois desmarca o último', function () {
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')
  })
})