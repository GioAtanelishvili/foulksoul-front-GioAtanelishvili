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

Cypress.Commands.add('login', () => {
  cy.visit('/login');

  cy.intercept('POST', `${Cypress.env('API_BASE_URL')}/login`, {
    statusCode: 200,
  });

  cy.get('#nickname').type('zazaevich');
  cy.get('#password').type('motoburti');
  cy.get('[data-testid="login-submit-button"]').click();
});

Cypress.Commands.add(
  'addMember',
  (delay?: number, statusCode: number = 201) => {
    cy.intercept('POST', `${Cypress.env('API_BASE_URL')}/band/member`, {
      statusCode,
      body: {
        createdMember: {
          _id: 'qasha',
          name: 'ქაშა',
          instrument: 'არცარაფერი',
          orbitRadius: 12,
          color: '#F0F0F0',
          biography: 'რუსთაველი ბიჭია.',
          avatarPath: '',
        },
      },
      delay,
    });

    cy.get('#name').type('ქაშა');
    cy.get('#instrument').type('არცარაფერი');
    cy.get('#orbit-radius').type('12');
    cy.get('#text-color').type('#f0f0f0');
    cy.get('#members-update-textarea').type('რუსთაველი ბიჭია.');

    cy.get('[data-testid="members-update-form-submit-button"]').click();
  }
);
