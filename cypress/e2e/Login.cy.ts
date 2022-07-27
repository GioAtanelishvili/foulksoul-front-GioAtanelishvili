describe('login page', () => {
  it('loads successfully', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });

    cy.visit('/login');

    cy.get('[data-testid="login-form"]').should('exist');
  });

  it('submitting empty fields displays error messages', () => {
    cy.get('[data-testid="login-submit-button"]').click();

    cy.contains('მეტსახელის ველი სავალდებულოა!').should('be.visible');
    cy.contains('პაროლის ველი სავალდებულოა!').should('be.visible');
  });

  it('submitting invalid form data displays error message', () => {
    cy.get('#nickname').type('za');
    cy.get('[data-testid="login-submit-button"]').click();
    cy.contains('უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან!').should('be.visible');
    cy.get('#nickname').clear();

    cy.get('#nickname').type('ZAZAEVICH');
    cy.get('[data-testid="login-submit-button"]').click();
    cy.contains(
      'უნდა შედგებოდეს დაბალი რეგისტრის სიმბოლოებისა და რიცხვებისგან!'
    ).should('be.visible');
    cy.get('#nickname').clear();

    cy.get('#password').type('mo');
    cy.get('[data-testid="login-submit-button"]').click();
    cy.contains('უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან!').should('be.visible');
    cy.get('#password').clear();
  });

  it('submitting invalid credential displays error', () => {
    cy.intercept('POST', `${Cypress.env('API_BASE_URL')}/login`, {
      statusCode: 422,
    });

    cy.get('#nickname').type('zazaevich');
    cy.get('#password').type('hockey');
    cy.get('[data-testid="login-submit-button"]').click();
    cy.contains('შეყვანილი მონაცემები არასწორია!').should('be.visible');
  });

  it('submitting valid credentials takes user to dashboard', () => {
    cy.intercept('POST', `${Cypress.env('API_BASE_URL')}/login`, {
      statusCode: 200,
    });

    cy.get('#nickname').type('zazaevich');
    cy.get('#password').type('motoburti');
    cy.get('[data-testid="login-submit-button"]').click();
    cy.url().should('include', 'band');
  });

  it('server error redirects user to 500 page', () => {
    cy.visit('/login');

    cy.intercept('POST', `${Cypress.env('API_BASE_URL')}/login`, {
      statusCode: 500,
    });

    cy.get('#nickname').type('zazaevich');
    cy.get('#password').type('motoburti');
    cy.get('[data-testid="login-submit-button"]').click();
    cy.url().should('include', '500');
  });
});
