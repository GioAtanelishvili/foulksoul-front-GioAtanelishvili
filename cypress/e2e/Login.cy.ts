describe('login page', () => {
  beforeEach(() => {
    cy.stubImageRequests();
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it('loads successfully', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });

    cy.visit('/login');

    cy.get('[data-test-id="login-form"]').should('exist');
  });

  it('submitting empty fields displays error messages', () => {
    cy.get('[data-test-id="login-submit-button"]').click();

    cy.get('[data-test-id="nickname-error-message"]').should(
      'contain.text',
      'მეტსახელის ველი სავალდებულოა!'
    );
    cy.get('[data-test-id="password-error-message"]').should(
      'contain.text',
      'პაროლის ველი სავალდებულოა!'
    );
  });

  it('submitting invalid form data displays error message', () => {
    cy.get('#nickname').type('za');
    cy.get('[data-test-id="login-submit-button"]').click();
    cy.get('[data-test-id="nickname-error-message"]').should(
      'contain.text',
      'უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან!'
    );
    cy.get('#nickname').clear();

    cy.get('#nickname').type('ZAZAEVICH');
    cy.get('[data-test-id="login-submit-button"]').click();
    cy.get('[data-test-id="nickname-error-message"]').should(
      'contain.text',
      'უნდა შედგებოდეს დაბალი რეგისტრის სიმბოლოებისა და რიცხვებისგან!'
    );
    cy.get('#nickname').clear();

    cy.get('#password').type('mo');
    cy.get('[data-test-id="login-submit-button"]').click();
    cy.get('[data-test-id="password-error-message"]').should(
      'contain.text',
      'უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან!'
    );
    cy.get('#password').clear();
  });

  it('submitting invalid credential displays error', () => {
    cy.intercept('POST', `${Cypress.env('API_BASE_URL')}/api/login`, {
      statusCode: 422,
    });

    cy.get('#nickname').type('zazaevich');
    cy.get('#password').type('hockey');
    cy.get('[data-test-id="login-submit-button"]').click();
    cy.get('[data-test-id="password-error-message"]').should(
      'contain.text',
      'შეყვანილი მონაცემები არასწორია!'
    );
  });

  it('server error redirects user to 500 page', () => {
    cy.visit('/login');

    cy.intercept('POST', `${Cypress.env('API_BASE_URL')}/api/login`, {
      statusCode: 500,
    });

    cy.get('#nickname').type('zazaevich');
    cy.get('#password').type('motoburti');
    cy.get('[data-test-id="login-submit-button"]').click();
    cy.url().should('include', '500');
  });

  it('submitting valid credentials takes user to dashboard', () => {
    cy.visit('/login');

    cy.intercept('POST', `${Cypress.env('API_BASE_URL')}/api/login`, {
      statusCode: 200,
      body: {
        token: 'xxxxxx.zzzzzz.yyyyyy',
      },
    });

    cy.get('#nickname').type('zazaevich');
    cy.get('#password').type('motoburti');
    cy.get('[data-test-id="login-submit-button"]').click();
    cy.url().should('include', 'band');
  });
});
