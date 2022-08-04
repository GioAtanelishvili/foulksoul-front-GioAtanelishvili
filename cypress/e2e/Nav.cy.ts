describe('dashboard navigation', () => {
  it('loads successfully', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });

    cy.login();

    cy.get('[data-test-id="dashboard-nav"]').should('exist');
  });

  it('user can navigate through dashboard pages', () => {
    cy.get('[data-test-id="link-to-members"]').click();
    cy.url().should('include', 'members');

    cy.get('[data-test-id="link-to-social-media"]').click();
    cy.url().should('include', 'social-media');

    cy.get('[data-test-id="link-to-band-about"]').click();
    cy.url().should('include', 'about');

    cy.get('[data-test-id="logout-button"]').click();
    cy.url().should('not.include', 'band');
  });
});
