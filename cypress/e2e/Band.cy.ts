import 'cypress-file-upload';

describe('band about page', () => {
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
    cy.visit('/band/about');

    cy.get('[data-testid="band-about-page-section"]').should('be.visible');
    cy.get('[data-testid="band-info-article"]').should(
      'contain.text',
      'ძალიან საინტერესო ბიოგრაფია.'
    );
  });

  it('loading spinner shows up when waiting for server response', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data, 5000);
    });

    cy.reload();

    cy.get('[data-testid="loading-spinner"]').should('be.visible');
  });

  it('message is displayed if band info is empty', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests({
        ...data,
        bandDetails: { info: '', imagePath: '' },
      });
    });

    cy.reload();

    cy.contains('ბენდის შესახებ ინფორმაცია დამატებული არ არის.').should(
      'be.visible'
    );
  });

  it('clicking image upload button opens image upload modal', () => {
    cy.get('[data-testid="image-upload-button"]').click();

    cy.get('[data-testid="modal-overlay"]').should('exist');
    cy.get('[data-testid="modal-card"]').should('exist');
  });

  it('clicking modal overlay or close button closes the modal', () => {
    cy.get('[data-testid="modal-overlay"]').click({ force: true });
    cy.get('[data-testid="modal-overlay"]').should('not.exist');
    cy.get('[data-testid="modal-card"]').should('not.exist');

    cy.get('[data-testid="image-upload-button"]').click();

    cy.get('[data-testid="modal-close-button"]').click();
    cy.get('[data-testid="modal-overlay"]').should('not.exist');
    cy.get('[data-testid="modal-card"]').should('not.exist');
  });

  it('user can upload a band image', () => {
    cy.intercept('PUT', `${Cypress.env('API_BASE_URL')}/api/band/*`, {
      statusCode: 200,
      body: {
        imagePath: 'band.jpg',
      },
    });

    cy.get('[data-testid="image-upload-button"]').click();

    cy.get('[data-testid="file-input"]').attachFile('images/band.jpg');
    cy.get('[data-testid="photo-upload-submit-button"]').click();

    cy.get('[data-testid="modal-overlay"]').should('not.exist');
    cy.get('[data-testid="modal-card"]').should('not.exist');
  });

  it('auth error redirects user to page 403', () => {
    cy.intercept('PUT', `${Cypress.env('API_BASE_URL')}/api/band/*`, {
      statusCode: 403,
    });

    cy.get('[data-testid="image-upload-button"]').click();

    cy.get('[data-testid="file-input"]').attachFile('images/band.jpg');
    cy.get('[data-testid="photo-upload-submit-button"]').click();

    cy.url().should('include', '403');
  });

  it('internal error redirects user to page 500', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.intercept('PUT', `${Cypress.env('API_BASE_URL')}/api/band/*`, {
      statusCode: 500,
    });
    cy.visit('band');
    cy.contains('ბენდის შესახებ').click();

    cy.get('[data-testid="image-upload-button"]').click();

    cy.get('[data-testid="file-input"]').attachFile('images/band.jpg');
    cy.get('[data-testid="photo-upload-submit-button"]').click();

    cy.url().should('include', '500');
  });

  it('clicking edit button takes user to edit band page', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.visit('band/about');

    cy.get('[data-testid="link-to-band-edit"]').click();
    cy.url().should('include', 'edit');
  });
});
