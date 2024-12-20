describe('Testes de Criação de Conta', () => {
  it('Deve criar uma nova conta com sucesso', () => {
    // Visitar o site
    cy.visit('https://challenge.primecontrol.com.br/');

    // Clique no botão "Criar uma conta" (usando { force: true })
    cy.contains('Criar uma conta').click({ force: true });

    // Preencher o campo de email
    cy.get('input#floatingInput').should('be.visible').type('usertester1000@gmail.com');

    // Preencher o campo de senha
    cy.get('input#floatingPassword').should('be.visible').type('password123');

    // Clicar no botão "Criar conta" (usando { force: true })
    cy.contains('Criar conta').click({ force: true });

    // Verificar se a URL foi alterada para a tela de login após a criação da conta
    cy.url().should('include', 'https://challenge.primecontrol.com.br/app');
    
    // Opcionalmente, verificar se o formulário de login está visível
    cy.get('input#floatingInput').should('be.visible'); // O campo de email no login
  });
});
