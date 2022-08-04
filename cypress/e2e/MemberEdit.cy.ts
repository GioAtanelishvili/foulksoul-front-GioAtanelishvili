describe('member edit page', () => {
  beforeEach(() => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.stubImageRequests();
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it('loads successfully', () => {
    cy.login();
    cy.visit('/band/members');

    cy.get('[data-test-id="sluchaina-yellow-button"]').click();
    cy.url().should('include', 'edit');
    cy.get('[data-test-id="members-update-form"]').should('be.visible');
  });

  it('form fields are filled with the data of the member', () => {
    cy.get('#name').should('have.value', 'სლუჩაინა');
    cy.get('#instrument').should('have.value', 'დოლი');
    cy.get('#orbit-radius').should('have.value', '500');
    cy.get('#text-color').should('have.value', '#F12AC7');
    cy.get('#members-update-textarea').should('have.value', 'კაი კაცი');
  });

  it('loading spinner shows up when waiting for server response', () => {
    cy.intercept('PATCH', `${Cypress.env('API_BASE_URL')}/api/band/*`, {
      statusCode: 200,
      delay: 5000,
    });

    cy.get('[data-test-id="update-form-submit-button"]').click();
    cy.get('[data-test-id="loading-spinner"]').should('be.visible');
  });

  it('auth error redirects user to page 403', () => {
    cy.intercept('PATCH', `${Cypress.env('API_BASE_URL')}/api/band/*`, {
      statusCode: 403,
    });
    cy.visit('/band/members');
    cy.get('[data-test-id="sluchaina-yellow-button"]').click();

    cy.get('[data-test-id="update-form-submit-button"]').click();
    cy.url().should('include', '403');
  });

  it('internal error redirects user to page 500', () => {
    cy.intercept('PATCH', `${Cypress.env('API_BASE_URL')}/api/band/*`, {
      statusCode: 500,
    });
    cy.visit('/band/members');
    cy.get('[data-test-id="sluchaina-yellow-button"]').click();

    cy.get('[data-test-id="update-form-submit-button"]').click();
    cy.url().should('include', '500');
  });

  it('submiting valid form updates member data', () => {
    cy.intercept('PATCH', `${Cypress.env('API_BASE_URL')}/api/band/*`, {
      statusCode: 200,
    });
    cy.visit('/band/members');
    cy.get('[data-test-id="sluchaina-yellow-button"]').click();

    cy.get('#name').clear().type('ღოღე');

    cy.get('[data-test-id="update-form-submit-button"]').click();

    cy.url().should('not.contain', 'edit');
    cy.get('[data-test-id="member-card-name"]').should('contain.text', 'ღოღე');
  });
});
