describe('Suíte de Testes de Login - SauceDemo', () => {

beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('1. Deve fazer login com sucesso', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
    cy.get('[data-test="title"]').should('be.visible');
  });

  it('2. Deve falhar ao tentar logar com usuário bloqueado', () => {
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain.text','Epic sadface: Sorry, this user has been locked out.')
  });

  it('3. Deve falhar ao tentar logar com informações incompletas', () => {
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain.text','Epic sadface: Password is required')
  });



})

describe('Suíte de Testes de Funcionalidades da Loja - SauceDemo', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
  });

  it('4. Deve adicionar um item ao carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();    
    cy.get('[data-test="shopping-cart-link"]').should('have.text','1')
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible');
  });

  it('5. Deve remover um item do carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();    
    cy.get('[data-test="shopping-cart-link"]').should('have.text','1')
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible');
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should('include', '/cart.html');
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();    
    cy.get('[data-test="item-4-title-link"] [data-test="inventory-item-name"]').should('not.exist');
  });

  it('6. Deve ordenar os produtos por "Nome (Z a A)"', () => {
    cy.get('[data-test="product-sort-container"]').select('za');      
    cy.get('[data-test="item-3-title-link"] [data-test="inventory-item-name"]').click();
    cy.get('[data-test="inventory-item-name"]').should('have.text', 'Test.allTheThings() T-Shirt (Red)');


  });

it('7. Deve completar o fluxo de checkout com sucesso', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();    
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();
    cy.url().should('include', '/checkout-step-one.html');
    
    cy.get('[data-test="firstName"]').type('Fernanda');
    cy.get('[data-test="lastName"]').type('Souza');
    cy.get('[data-test="postalCode"]').type('12345-678');
    
    cy.get('[data-test="continue"]').click();   
    cy.url().should('include', '/checkout-step-two.html');
    cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack');
      
    cy.get('[data-test="finish"]').click();     

    cy.url().should('include', '/checkout-complete.html');
    
    cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!');
  });

});
