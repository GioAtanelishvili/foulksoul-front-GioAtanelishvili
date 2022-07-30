describe('social media create page', () => {
  it('loads successfully', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });

    cy.login();
    cy.visit('/band/social-media');

    cy.get('[data-testid="link-to-social-media-create"]').click();
    cy.url().should('include', 'create');
    cy.get('[data-testid="social-media-update-form"]').should('be.visible');
  });

  it('submitting empty fields displays error messages', () => {
    cy.get('[data-testid="update-form-submit-button"]').click();

    cy.contains('სახელი სავალდებულოა!').should('be.visible');
    cy.contains('ბმული სავალდებულოა!').should('be.visible');
  });

  it('submitting invalid form data displays error messages', () => {
    cy.get('#name').type('b');
    cy.get('#url').type('not-an-url');

    cy.get('[data-testid="update-form-submit-button"]').click();

    cy.contains('გამოიყენეთ მინ. 2 სიმბოლო!').should('be.visible');
    cy.contains('ბმული უნდა იყოს ვალიდური!').should('be.visible');

    cy.get('#name').clear();
    cy.get('#url').clear();
  });

  it('submitting valid form creates new social media item', () => {
    cy.addSocialMedia();

    cy.url().should('not.include', 'create');

    cy.get('[data-testid="dashboard-card-nav-button-1"]').click();
    cy.contains('Facebook').should('be.visible');
  });

  it('loading spinner shows up when waiting for server response', () => {
    cy.get('[data-testid="link-to-social-media-create"]').click();

    cy.addSocialMedia(5000);
    cy.get('[data-testid="loading-spinner"]').should('be.visible');
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
