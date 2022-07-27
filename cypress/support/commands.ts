/// <reference types="cypress" />

Cypress.Commands.add('stubGetRequests', (res: any, delay?: number) => {
  cy.intercept('GET', `${Cypress.env('API_BASE_URL')}/band/members`, {
    body: res.members,
    delay,
  });
  cy.intercept('GET', `${Cypress.env('API_BASE_URL')}/band/social-media`, {
    body: res.socialMedia,
    delay,
  });
  cy.intercept('GET', `${Cypress.env('API_BASE_URL')}/band`, {
    body: res.bandDetails,
    delay,
  });
});
