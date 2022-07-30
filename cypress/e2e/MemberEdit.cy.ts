describe('member edit page', () => {
  beforeEach(() => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
  });

  it('loads successfully', () => {
    cy.login();
    cy.visit('/band/members');

    cy.get('[data-testid="sluchaina-yellow-button"]').click();
    cy.url().should('include', 'edit');
    cy.get('[data-testid="members-update-form"]').should('be.visible');
  });

  it('form fields are filled with the data of the member', () => {
    cy.get('#name').should('have.value', 'სლუჩაინა');
    cy.get('#instrument').should('have.value', 'დოლი');
    cy.get('#orbit-radius').should('have.value', '500');
    cy.get('#text-color').should('have.value', '#F12AC7');
    cy.get('#members-update-textarea').should('have.value', 'კაი კაცი');
  });

  it('loading spinner shows up when waiting for server response', () => {
    cy.intercept('PATCH', `${Cypress.env('API_BASE_URL')}/band/*`, {
      statusCode: 200,
      delay: 5000,
    });

    cy.get('[data-testid="update-form-submit-button"]').click();
    cy.get('[data-testid="loading-spinner"]').should('be.visible');
  });

  it('auth error redirects user to page 403', () => {
    cy.intercept('PATCH', `${Cypress.env('API_BASE_URL')}/band/*`, {
      statusCode: 403,
    });
    cy.visit('/band/members');
    cy.get('[data-testid="sluchaina-yellow-button"]').click();

    cy.get('[data-testid="update-form-submit-button"]').click();
    cy.url().should('include', '403');
  });

  it('internal error redirects user to page 500', () => {
    cy.intercept('PATCH', `${Cypress.env('API_BASE_URL')}/band/*`, {
      statusCode: 500,
    });
    cy.visit('/band/members');
    cy.get('[data-testid="sluchaina-yellow-button"]').click();

    cy.get('[data-testid="update-form-submit-button"]').click();
    cy.url().should('include', '500');
  });

  it('submiting valid form updates member data', () => {
    cy.intercept('PATCH', `${Cypress.env('API_BASE_URL')}/band/*`, {
      statusCode: 200,
    });
    cy.visit('/band/members');
    cy.get('[data-testid="sluchaina-yellow-button"]').click();

    cy.get('#name').clear().type('ღოღე');

    cy.get('[data-testid="update-form-submit-button"]').click();

    cy.url().should('not.contain', 'edit');
    cy.contains('ღოღე').should('be.visible');
  });
});
