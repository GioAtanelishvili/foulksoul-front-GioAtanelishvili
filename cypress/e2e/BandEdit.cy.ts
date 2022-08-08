describe('band edit page', () => {
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

    cy.login();
    cy.visit('/band/about/edit');

    cy.get('[data-test-id="band-edit-form"]').should('be.visible');
    cy.get('[data-test-id="band-edit-textarea"]').should(
      'have.value',
      'ძალიან საინტერესო ბიოგრაფია.'
    );
  });

  it('loading spinner shows up when waiting for server response', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data, 5000);
    });
    cy.reload();

    cy.get('[data-test-id="loading-spinner"]').should('be.visible');
  });

  it('user can update band info', () => {
    cy.intercept('PUT', `${Cypress.env('API_BASE_URL')}/api/band/*`, {
      statusCode: 200,
    });

    cy.get('[data-test-id="band-edit-textarea"]')
      .clear()
      .type('კიდევ უფრო საინტერესო ბიოგრაფია.');
    cy.get('[data-test-id="band-edit-form-submit-button"]').click();

    it('submitting form redirects user to band about page', () => {
      cy.url().should('include', 'about');
      cy.get('[data-test-id="band-info-article"]').should(
        'contain.text',
        'ძალიან საინტერესო ბიოგრაფია.'
      );
    });
  });

  it('auth error redirects user to page 403', () => {
    cy.intercept('PUT', `${Cypress.env('API_BASE_URL')}/api/band/info`, {
      statusCode: 403,
    });
    cy.visit('/band/about/edit');

    cy.get('[data-test-id="band-edit-form-submit-button"]').click();
    cy.url().should('include', '403');
  });

  it('auth error redirects user to page 500', () => {
    cy.intercept('PUT', `${Cypress.env('API_BASE_URL')}/api/band/info`, {
      statusCode: 500,
    });
    cy.visit('/band/about/edit');

    cy.get('[data-test-id="band-edit-form-submit-button"]').click();
    cy.url().should('include', '500');
  });
});
