import 'cypress-file-upload';

describe('social media page', () => {
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
    cy.visit('/band/social-media');

    cy.get('[data-testid="dashboard-header"]').should(
      'contain.text',
      'სოციალური ბმულები'
    );
  });

  it('loading spinner shows up when waiting for server response', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data, 5000);
    });
    cy.reload();

    cy.get('[data-testid="loading-spinner"]').should('be.visible');
  });

  it('nav buttons are displayed only if there are more than 3 social media item', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.reload();

    cy.get('[data-testid="dashboard-card-nav-button-0"]').should('be.visible');
    cy.get('[data-testid="dashboard-card-nav-button-1"]').should('be.visible');

    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests({ ...data, socialMedia: [] });
    });
    cy.reload();

    cy.get('[data-testid="dashboard-card-nav-button-0"]').should('not.exist');
    cy.get('[data-testid="dashboard-card-nav-button-1"]').should('not.exist');
  });

  it('user can navigate to check all social media items', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.reload();

    cy.get('[data-testid="dashboard-card-nav-button-1"]').click();
    cy.url().should('include', '?page=2');

    cy.get('[data-testid="dashboard-card-nav-button-0"]').click();
    cy.url().should('include', '?page=1');
  });

  it('clicking icon upload button opens image upload modal', () => {
    cy.get('[data-testid="facebook-icon-upload-button"]').click();

    cy.get('[data-testid="modal-overlay"]').should('exist');
    cy.get('[data-testid="modal-card"]').should('exist');
  });

  it('clicking modal overlay or close button closes the modal', () => {
    cy.get('[data-testid="modal-overlay"]').click({ force: true });
    cy.get('[data-testid="modal-overlay"]').should('not.exist');
    cy.get('[data-testid="modal-card"]').should('not.exist');

    cy.get('[data-testid="facebook-icon-upload-button"]').click();

    cy.get('[data-testid="modal-close-button"]').click();
    cy.get('[data-testid="modal-overlay"]').should('not.exist');
    cy.get('[data-testid="modal-card"]').should('not.exist');
  });

  it('user can upload a social media icon', () => {
    cy.intercept(
      'PUT',
      `${Cypress.env('API_BASE_URL')}/api/band/social-media/*`,
      {
        statusCode: 200,
        body: {
          avatarPath: 'facebook.png',
        },
      }
    );

    cy.get('[data-testid="facebook-icon-upload-button"]').click();

    cy.get('[data-testid="file-input"]').attachFile('images/facebook.png');
    cy.get('[data-testid="photo-upload-submit-button"]').click();

    cy.get('[data-testid="modal-overlay"]').should('not.exist');
    cy.get('[data-testid="modal-card"]').should('not.exist');
  });

  it('auth error redirects user to page 403', () => {
    cy.intercept(
      'PUT',
      `${Cypress.env('API_BASE_URL')}/api/band/social-media/*`,
      {
        statusCode: 403,
      }
    );

    cy.get('[data-testid="facebook-icon-upload-button"]').click();

    cy.get('[data-testid="file-input"]').attachFile('images/facebook.png');
    cy.get('[data-testid="photo-upload-submit-button"]').click();

    cy.url().should('include', '403');
  });

  it('internal error redirects user to page 500', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.intercept(
      'PUT',
      `${Cypress.env('API_BASE_URL')}/api/band/social-media/*`,
      {
        statusCode: 500,
      }
    );
    cy.visit('band/social-media');

    cy.get('[data-testid="facebook-icon-upload-button"]').click();

    cy.get('[data-testid="file-input"]').attachFile('images/facebook.png');
    cy.get('[data-testid="photo-upload-submit-button"]').click();

    cy.url().should('include', '500');
  });

  it('clicking red button opens modal for deleting a social media', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.visit('/band/social-media');

    cy.get('[data-testid="facebook-red-button"]').click();

    cy.get('[data-testid="modal-overlay"]').should('exist');
    cy.get('[data-testid="modal-card"]').should('exist');
  });

  it('clicking modal overlay or close button closes the modal', () => {
    cy.get('[data-testid="modal-overlay"]').click({ force: true });
    cy.get('[data-testid="modal-overlay"]').should('not.exist');
    cy.get('[data-testid="modal-card"]').should('not.exist');

    cy.get('[data-testid="facebook-red-button"]').click();

    cy.get('[data-testid="modal-close-button"]').click();
    cy.get('[data-testid="modal-overlay"]').should('not.exist');
    cy.get('[data-testid="modal-card"]').should('not.exist');
  });

  it('clicking "წაშლა" button deletes a member', () => {
    cy.intercept('DELETE', `${Cypress.env('API_BASE_URL')}/api/band/*`, {
      statusCode: 200,
    });

    cy.get('[data-testid="facebook-red-button"]').click();
    cy.get('[data-testid="data-delete-button"]').click();

    cy.get('[data-testid="modal-overlay"]').should('not.exist');
    cy.get('[data-testid="modal-card"]').should('not.exist');
    cy.contains('Facebook').should('not.exist');
  });

  it('auth error redirects user to page 403', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.intercept('DELETE', `${Cypress.env('API_BASE_URL')}/api/band/*`, {
      statusCode: 403,
    });
    cy.visit('/band/social-media');
    cy.get('[data-testid="facebook-red-button"]').click();

    cy.get('[data-testid="data-delete-button"]').click();
    cy.url().should('include', '403');
  });

  it('internal error redirects user to page 500', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.intercept('DELETE', `${Cypress.env('API_BASE_URL')}/api/band/*`, {
      statusCode: 500,
    });
    cy.visit('/band/social-media');
    cy.get('[data-testid="facebook-red-button"]').click();

    cy.get('[data-testid="data-delete-button"]').click();
    cy.url().should('include', '500');
  });

  it('clicking yellow button redirects user to edit member page', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.visit('band/social-media');

    cy.get('[data-testid="facebook-yellow-button"]').click();
    cy.url().should('include', 'edit');
  });
});
