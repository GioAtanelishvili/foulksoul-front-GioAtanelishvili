import 'cypress-file-upload';

describe('members page', () => {
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
    cy.visit('/band/members');

    cy.get('[data-test-id="dashboard-header"]').should(
      'contain.text',
      'ჯგუფის წევრები'
    );
  });

  it('loading spinner shows up when waiting for server response', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data, 5000);
    });
    cy.reload();

    cy.get('[data-test-id="loading-spinner"]').should('be.visible');
  });

  it('nav buttons are displayed only if there are more than 3 members', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.reload();

    cy.get('[data-test-id="dashboard-card-nav-button-0"]').should('be.visible');
    cy.get('[data-test-id="dashboard-card-nav-button-1"]').should('be.visible');

    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests({ ...data, members: [] });
    });
    cy.reload();

    cy.get('[data-test-id="dashboard-card-nav-button-0"]').should('not.exist');
    cy.get('[data-test-id="dashboard-card-nav-button-1"]').should('not.exist');
  });

  it('user can navigate to check all members', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.reload();

    cy.get('[data-test-id="dashboard-card-nav-button-1"]').click();
    cy.url().should('include', '?page=2');

    cy.get('[data-test-id="dashboard-card-nav-button-0"]').click();
    cy.url().should('include', '?page=1');
  });

  it('clicking green button on member card opens member details modal', () => {
    cy.get('[data-test-id="sluchaina-green-button"]').click();

    cy.get('[data-test-id="modal-overlay"]').should('exist');
    cy.get('[data-test-id="modal-card"]').should('exist');
  });

  it("member details modal contains member's data", () => {
    cy.get('[data-test-id="modal-card-header"]').should(
      'contain.text',
      'სლუჩაინა ~ დოლი'
    );
    cy.get('[data-test-id="orbit-radius"]').should(
      'contain.text',
      'ორბიტალური დაშორება: 500'
    );
    cy.get('[data-test-id="biography"]').should('contain.text', 'კაი კაცი');
  });

  it('clicking modal overlay or close button closes the modal', () => {
    cy.get('[data-test-id="modal-overlay"]').click({ force: true });
    cy.get('[data-test-id="modal-overlay"]').should('not.exist');
    cy.get('[data-test-id="modal-card"]').should('not.exist');

    cy.get('[data-test-id="sluchaina-green-button"]').click();

    cy.get('[data-test-id="modal-close-button"]').click();
    cy.get('[data-test-id="modal-overlay"]').should('not.exist');
    cy.get('[data-test-id="modal-card"]').should('not.exist');
  });

  it('clicking red button opens modal for deleting a member', () => {
    cy.get('[data-test-id="sluchaina-red-button"]').click();

    cy.get('[data-test-id="modal-overlay"]').should('exist');
    cy.get('[data-test-id="modal-card"]').should('exist');
  });

  it('clicking modal overlay or close button closes the modal', () => {
    cy.get('[data-test-id="modal-overlay"]').click({ force: true });
    cy.get('[data-test-id="modal-overlay"]').should('not.exist');
    cy.get('[data-test-id="modal-card"]').should('not.exist');

    cy.get('[data-test-id="sluchaina-red-button"]').click();

    cy.get('[data-test-id="modal-close-button"]').click();
    cy.get('[data-test-id="modal-overlay"]').should('not.exist');
    cy.get('[data-test-id="modal-card"]').should('not.exist');
  });

  it('clicking avatar upload button opens image upload modal', () => {
    cy.get('[data-test-id="sluchaina-avatar-upload-button"]').click();

    cy.get('[data-test-id="modal-overlay"]').should('exist');
    cy.get('[data-test-id="modal-card"]').should('exist');
  });

  it('clicking modal overlay or close button closes the modal', () => {
    cy.get('[data-test-id="modal-overlay"]').click({ force: true });
    cy.get('[data-test-id="modal-overlay"]').should('not.exist');
    cy.get('[data-test-id="modal-card"]').should('not.exist');

    cy.get('[data-test-id="sluchaina-avatar-upload-button"]').click();

    cy.get('[data-test-id="modal-close-button"]').click();
    cy.get('[data-test-id="modal-overlay"]').should('not.exist');
    cy.get('[data-test-id="modal-card"]').should('not.exist');
  });

  it('large payload error displays error message', () => {
    cy.intercept('PUT', `${Cypress.env('API_BASE_URL')}/api/band/member/*`, {
      statusCode: 413,
    });

    cy.get('[data-test-id="sluchaina-avatar-upload-button"]').click();

    cy.get('[data-test-id="file-input"]').attachFile('images/qristefore.png');
    cy.get('[data-test-id="photo-upload-submit-button"]').click();

    cy.get('[data-test-id="photo-upload-error-message"]').should(
      'contain.text',
      'ფაილი არ უნდა აღემატებოდეს 1MB-ს!'
    );
    cy.get('[data-test-id="modal-close-button"]').click();
  });

  it('user can upload a member avatar', () => {
    cy.intercept('PUT', `${Cypress.env('API_BASE_URL')}/api/band/member/*`, {
      statusCode: 200,
      body: {
        avatarPath: 'sluchaina.png',
      },
    });

    cy.get('[data-test-id="sluchaina-avatar-upload-button"]').click();

    cy.get('[data-test-id="file-input"]').attachFile('images/sluchaina.png');
    cy.get('[data-test-id="photo-upload-submit-button"]').click();

    cy.get('[data-test-id="modal-overlay"]').should('not.exist');
    cy.get('[data-test-id="modal-card"]').should('not.exist');
  });

  it('auth error redirects user to page 403', () => {
    cy.intercept('PUT', `${Cypress.env('API_BASE_URL')}/api/band/member/*`, {
      statusCode: 403,
    });

    cy.get('[data-test-id="sluchaina-avatar-upload-button"]').click();

    cy.get('[data-test-id="file-input"]').attachFile('images/sluchaina.png');
    cy.get('[data-test-id="photo-upload-submit-button"]').click();

    cy.url().should('include', '403');
  });

  it('internal error redirects user to page 500', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.intercept('PUT', `${Cypress.env('API_BASE_URL')}/api/band/member/*`, {
      statusCode: 500,
    });
    cy.visit('band/members');

    cy.get('[data-test-id="sluchaina-avatar-upload-button"]').click();

    cy.get('[data-test-id="file-input"]').attachFile('images/sluchaina.png');
    cy.get('[data-test-id="photo-upload-submit-button"]').click();

    cy.url().should('include', '500');
  });

  it('clicking "წაშლა" button deletes a member', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.intercept('DELETE', `${Cypress.env('API_BASE_URL')}/api/band/*`, {
      statusCode: 200,
    });
    cy.visit('/band/members');

    cy.get('[data-test-id="sluchaina-red-button"]').click();
    cy.get('[data-test-id="data-delete-button"]').click();

    cy.get('[data-test-id="modal-overlay"]').should('not.exist');
    cy.get('[data-test-id="modal-card"]').should('not.exist');
    cy.get('[data-test-id="member-card-name"]').should(
      'not.contain.text',
      'სლუჩაინა'
    );
  });

  it('auth error redirects user to page 403', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.intercept('DELETE', `${Cypress.env('API_BASE_URL')}/api/band/*`, {
      statusCode: 403,
    });
    cy.visit('/band/members');
    cy.get('[data-test-id="sluchaina-red-button"]').click();

    cy.get('[data-test-id="data-delete-button"]').click();
    cy.url().should('include', '403');
  });

  it('internal error redirects user to page 500', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.intercept('DELETE', `${Cypress.env('API_BASE_URL')}/api/band/*`, {
      statusCode: 500,
    });
    cy.visit('/band/members');
    cy.get('[data-test-id="sluchaina-red-button"]').click();

    cy.get('[data-test-id="data-delete-button"]').click();
    cy.url().should('include', '500');
  });

  it('clicking yellow button redirects user to edit member page', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.visit('band/members');

    cy.get('[data-test-id="sluchaina-yellow-button"]').click();
    cy.url().should('include', 'edit');
  });
});
