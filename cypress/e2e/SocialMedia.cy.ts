describe('social media page', () => {
  beforeEach(() => {
    cy.stubImageRequests();
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
});
