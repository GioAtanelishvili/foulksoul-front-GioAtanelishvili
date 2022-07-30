describe('social media edit page', () => {
  beforeEach(() => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
  });

  it('loads successfully', () => {
    cy.login();
    cy.visit('/band/social-media');

    cy.get('[data-testid="facebook-yellow-button"]').click();
    cy.url().should('include', 'edit');
    cy.get('[data-testid="social-media-update-form"]').should('be.visible');
  });

  it('form fields are filled with the data of the social-media', () => {
    cy.get('#name').should('have.value', 'Facebook');
    cy.get('#url').should('have.value', 'https://facebook.com/');
  });

  it('loading spinner shows up when waiting for server response', () => {
    cy.intercept('PATCH', `${Cypress.env('API_BASE_URL')}/social-media/*`, {
      statusCode: 200,
      delay: 5000,
    });

    cy.get('[data-testid="update-form-submit-button"]').click();
    cy.get('[data-testid="loading-spinner"]').should('be.visible');
  });

  it('auth error redirects user to page 403', () => {
    cy.intercept('PATCH', `${Cypress.env('API_BASE_URL')}/social-media/*`, {
      statusCode: 403,
    });
    cy.visit('/social-media/members');
    cy.get('[data-testid="facebook-yellow-button"]').click();

    cy.get('[data-testid="update-form-submit-button"]').click();
    cy.url().should('include', '403');
  });

  it('internal error redirects user to page 500', () => {
    cy.intercept('PATCH', `${Cypress.env('API_BASE_URL')}/social-media/*`, {
      statusCode: 500,
    });
    cy.visit('/social-media/members');
    cy.get('[data-testid="facebook-yellow-button"]').click();

    cy.get('[data-testid="update-form-submit-button"]').click();
    cy.url().should('include', '500');
  });

  it('submiting valid form updates social media data', () => {
    cy.intercept('PATCH', `${Cypress.env('API_BASE_URL')}/social-media/*`, {
      statusCode: 200,
    });
    cy.visit('/social-media/members');
    cy.get('[data-testid="facebook-yellow-button"]').click();

    cy.get('#name').clear().type('instagram');

    cy.get('[data-testid="update-form-submit-button"]').click();

    cy.url().should('not.contain', 'edit');
    cy.contains('Instagram').should('be.visible');
  });
});