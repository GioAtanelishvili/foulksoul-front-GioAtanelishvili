describe('landing page', () => {
  beforeEach(() => {
    cy.stubImageRequests();
  });

  it('loads successfully', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });

    cy.visit('/');

    cy.get('[data-testid="band-logo"]').should('exist');
    cy.get('[data-testid="landing-page-header"]').should('exist');
    cy.get('[data-testid="landing-page-main-content"]').should('exist');
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
      cy.stubGetRequests({ ...data, bandDetails: { info: '', imagePath: '' } });
    });
    cy.reload();

    cy.contains('ბენდის შესახებ ინფორმაცია დამატებული არ არის.').should(
      'be.visible'
    );
  });

  it('band info is displayed is everything goes well', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.reload();

    cy.contains('ძალიან საინტერესო ბიოგრაფია.').should('be.visible');
  });

  it('clicking member planet changes card subject to member', () => {
    cy.get('[data-testid="sluchaina-planet"]').click();
    cy.get('[data-testid="landing-card-member-avatar"]').should('be.visible');
    cy.get('[data-testid="landing-card-article"]').should(
      'contain.text',
      'კაი კაცი'
    );
  });

  it('clicking sunnote changes card subject back to band', () => {
    cy.get('[data-testid="landing-sunnote"]').click();
    cy.get('[data-testid="landing-card-article"]').should(
      'contain.text',
      'ძალიან საინტერესო ბიოგრაფია.'
    );
  });

  it('interna error redirects user to page 500', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.intercept('GET', `${Cypress.env('API_BASE_URL')}/api/band/members`, {
      statusCode: 500,
    });
    cy.reload();

    cy.url().should('include', '500');
  });

  it('clicking "შესვლა" button redirects user to login page', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.visit('/');
    cy.get('[data-testid="login-button"]').click();
    cy.url().should('include', 'login');
  });
});
