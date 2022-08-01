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

  it('clicking "შესვლა" button redirects user to login page', () => {
    cy.get('[data-testid="login-button"]').click();
    cy.url().should('include', 'login');
  });
});
