describe('members page', () => {
  it('loads successfully', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });

    cy.login();
    cy.visit('/band/members');

    cy.get('[data-testid="dashboard-header"]').should(
      'contain.text',
      'ჯგუფის წევრები'
    );
  });

  it('loading spinner shows up when waiting for server response', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data, 5000);
    });
    cy.reload();

    cy.get('[data-testid="loading-spinner"]').should('be.visible');
  });

  it('nav buttons are displayed only if there are more than 3 members', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.reload();

    cy.get('[data-testid="dashboard-card-nav-button-0"]').should('be.visible');
    cy.get('[data-testid="dashboard-card-nav-button-1"]').should('be.visible');

    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests({ ...data, members: [] });
    });
    cy.reload();

    cy.get('[data-testid="dashboard-card-nav-button-0"]').should('not.exist');
    cy.get('[data-testid="dashboard-card-nav-button-1"]').should('not.exist');
  });

  it('user can navigate to check all members', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.reload();

    cy.get('[data-testid="dashboard-card-nav-button-1"]').click();
    cy.url().should('include', '?page=2');

    cy.get('[data-testid="dashboard-card-nav-button-0"]').click();
    cy.url().should('include', '?page=1');
  });

  it('clicking green button on member card opens member details modal', () => {
    cy.get('[data-testid="sluchaina-green-button"]').click();

    cy.get('[data-testid="modal-overlay"]').should('exist');
    cy.get('[data-testid="modal-card"]').should('exist');
  });

  it("member details modal contains member's data", () => {
    cy.get('[data-testid="modal-card-header"]').should(
      'contain.text',
      'სლუჩაინა ~ დოლი'
    );
    cy.get('[data-testid="orbit-radius"]').should(
      'contain.text',
      'ორბიტალური დაშორება: 500'
    );
    cy.get('[data-testid="biography"]').should('contain.text', 'კაი კაცი');
  });

  it('clicking modal overlay or close button closes the modal', () => {
    cy.get('[data-testid="modal-overlay"]').click({ force: true });
    cy.get('[data-testid="modal-overlay"]').should('not.exist');
    cy.get('[data-testid="modal-card"]').should('not.exist');

    cy.get('[data-testid="sluchaina-green-button"]').click();

    cy.get('[data-testid="modal-close-button"]').click();
    cy.get('[data-testid="modal-overlay"]').should('not.exist');
    cy.get('[data-testid="modal-card"]').should('not.exist');
  });
});
