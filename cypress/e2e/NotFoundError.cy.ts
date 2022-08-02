it('entering invalid url navigates user to 404 page', () => {
  cy.visit('invalid-url');
  cy.contains('404 - Not Found :(').should('be.visible');
});
