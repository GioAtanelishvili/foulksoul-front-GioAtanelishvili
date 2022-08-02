/// <reference types="cypress" />

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add('saveLocalStorage', () => {
  Object.keys(localStorage).forEach((key) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add('restoreLocalStorage', () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

Cypress.Commands.add('stubGetRequests', (res: any, delay?: number) => {
  cy.intercept('GET', `${Cypress.env('API_BASE_URL')}/api/band/members`, {
    body: res.members,
    delay,
  });
  cy.intercept('GET', `${Cypress.env('API_BASE_URL')}/api/band/social-media`, {
    body: res.socialMedia,
    delay,
  });
  cy.intercept('GET', `${Cypress.env('API_BASE_URL')}/api/band`, {
    body: res.bandDetails,
    delay,
  });
});

Cypress.Commands.add('stubImageRequests', () => {
  cy.intercept(`${Cypress.env('API_BASE_URL')}/band.jpg`, {
    fixture: 'images/band.jpg',
  });
  cy.intercept(`${Cypress.env('API_BASE_URL')}/sluchaina.png`, {
    fixture: 'images/sluchaina.png',
  });
  cy.intercept(`${Cypress.env('API_BASE_URL')}/qristefore.png`, {
    fixture: 'images/qristefore.png',
  });
  cy.intercept(`${Cypress.env('API_BASE_URL')}/facebook.png`, {
    fixture: 'images/facebook.png',
  });
  cy.intercept(`${Cypress.env('API_BASE_URL')}/youtube.png`, {
    fixture: 'images/youtube.png',
  });
});

Cypress.Commands.add('login', () => {
  cy.visit('/login');

  cy.intercept('POST', `${Cypress.env('API_BASE_URL')}/api/login`, {
    statusCode: 200,
    body: {
      token: 'xxxxxx.yyyyyy.zzzzzz',
    },
  });

  cy.get('#nickname').type('zazaevich');
  cy.get('#password').type('motoburti');
  cy.get('[data-testid="login-submit-button"]').click();

  const clear = Cypress.LocalStorage.clear;

  Cypress.LocalStorage.clear = function (keys) {
    // do something with the keys here
    if (keys) {
      return clear.apply(this, arguments);
    }
  };
});

Cypress.Commands.add(
  'addMember',
  (delay?: number, statusCode: number = 201) => {
    cy.intercept('POST', `${Cypress.env('API_BASE_URL')}/api/band/member`, {
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

    cy.get('[data-testid="update-form-submit-button"]').click();
  }
);

Cypress.Commands.add(
  'addSocialMedia',
  (delay?: number, statusCode: number = 201) => {
    cy.intercept(
      'POST',
      `${Cypress.env('API_BASE_URL')}/api/band/social-media`,
      {
        statusCode,
        body: {
          createdSocialMediaItem: {
            _id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com',
            iconPath: '',
          },
        },
        delay,
      }
    );

    cy.get('#name').type('Facebook');
    cy.get('#url').type('https://facebook.com');

    cy.get('[data-testid="update-form-submit-button"]').click();
  }
);
