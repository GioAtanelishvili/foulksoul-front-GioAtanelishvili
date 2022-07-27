describe('dashboard navigation', () => {
  it('loads successfully', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });

    cy.login();

    cy.get('[data-testid="dashboard-nav"]').should('exist');
  });

  it('user can navigate through dashboard pages', () => {
    cy.contains('ჯგუფის წევრები').click();
    cy.url().should('include', 'members');

    cy.contains('სოციალური ბმულები').click();
    cy.url().should('include', 'social-media');

    cy.contains('ბენდის შესახებ').click();
    cy.url().should('include', 'about');

    cy.contains('გადი გარეთ').click();
    cy.url().should('not.include', 'band');
  });
});
