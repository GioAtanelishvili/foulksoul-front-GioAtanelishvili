describe('main page', () => {
  beforeEach(() => {
    cy.stubImageRequests();
  });

  it('loads successfully', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });

    cy.login();

    cy.get('[data-testid="greeting"]').should('exist');
  });

  it('loading spinner shows up when waiting for server response', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data, 5000);
    });
    cy.reload();

    cy.get('[data-testid="loading-spinner"]').should('be.visible');
  });

  it('message is displayed if band photo is not uploaded', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests({ ...data, bandDetails: { info: '', imagePath: '' } });
    });
    cy.reload();

    cy.get('[date-testid="photo-not-uploaded-message"]').should('exist');
    cy.get('[data-testid="loading-spinner"]').should('not.exist');
  });

  it('band photo is displayed if everything goes well', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.reload();

    cy.get('[data-testId="main-band-image"]').should('be.visible');
    cy.get('[data-testid="loading-spinner"]').should('not.exist');
  });
});
