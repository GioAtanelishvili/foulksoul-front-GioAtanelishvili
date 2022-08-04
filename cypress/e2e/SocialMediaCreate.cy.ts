describe('social media create page', () => {
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

    cy.get('[data-test-id="link-to-social-media-create"]').click();
    cy.url().should('include', 'create');
    cy.get('[data-test-id="social-media-update-form"]').should('be.visible');
  });

  it('submitting empty fields displays error messages', () => {
    cy.get('[data-test-id="update-form-submit-button"]').click();

    cy.get('[data-test-id="name-error-message"]').should(
      'contain.text',
      'სახელი სავალდებულოა!'
    );
    cy.get('[data-test-id="url-error-message"]').should(
      'contain.text',
      'ბმული სავალდებულოა!'
    );
  });

  it('submitting invalid form data displays error messages', () => {
    cy.get('#name').type('b');
    cy.get('#url').type('not-an-url');

    cy.get('[data-test-id="update-form-submit-button"]').click();

    cy.get('[data-test-id="name-error-message"]').should(
      'contain.text',
      'გამოიყენეთ მინ. 2 სიმბოლო!'
    );
    cy.get('[data-test-id="url-error-message"]').should(
      'contain.text',
      'ბმული უნდა იყოს ვალიდური!'
    );

    cy.get('#name').clear();
    cy.get('#url').clear();
  });

  it('submitting valid form creates new social media item', () => {
    cy.addSocialMedia();

    cy.url().should('not.include', 'create');

    cy.get('[data-test-id="dashboard-card-nav-button-1"]').click();
    cy.get('[data-test-id="social-media-card-name"]').should(
      'contain.text',
      'Facebook'
    );
  });

  it('loading spinner shows up when waiting for server response', () => {
    cy.get('[data-test-id="link-to-social-media-create"]').click();

    cy.addSocialMedia(5000);
    cy.get('[data-test-id="loading-spinner"]').should('be.visible');
  });

  it('auth error redirects user to page 403', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.visit('/band/social-media/create');

    cy.addSocialMedia(null, 403);
    cy.url().should('include', '403');
  });

  it('internal error redirects user to page 500', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.visit('/band/social-media/create');

    cy.addSocialMedia(null, 500);
    cy.url().should('include', '500');
  });
});
