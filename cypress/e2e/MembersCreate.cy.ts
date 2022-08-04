describe('member create page', () => {
  beforeEach(() => {
    cy.stubImageRequests();
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it('loads successfully', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });

    cy.login();
    cy.visit('/band/members');

    cy.get('[data-test-id="link-to-member-create"]').click();
    cy.url().should('include', 'create');
    cy.get('[data-test-id="members-update-form"]').should('be.visible');
  });

  it('submitting empty fields displays error messages', () => {
    cy.get('[data-test-id="update-form-submit-button"]').click();

    cy.get('[data-test-id="name-error-message"]').should(
      'contain.text',
      'სახელი სავალდებულოა!'
    );
    cy.get('[data-test-id="color-error-message"]').should(
      'contain.text',
      'ფერი სავალდებულოა!'
    );
    cy.get('[data-test-id="member-textarea-error-message"]').should(
      'contain.text',
      'ბიოგრაფია სავალდებულოა!'
    );
  });

  it('submitting invalid form data displays error messages', () => {
    cy.get('#name').type('babnika');
    cy.get('#orbit-radius').type('not a number');
    cy.get('#instrument').type('გ');

    cy.get('[data-test-id="update-form-submit-button"]').click();

    cy.get('[data-test-id="name-error-message"]').should(
      'contain.text',
      'გამოიყენეთ მხოლოდ ქართული ასოები!'
    );
    cy.get('[data-test-id="orbit-radius-error-message"]').should(
      'contain.text',
      'გამოიყენეთ მხოლოდ ციფრები!'
    );
    cy.get('[data-test-id="instrument-error-message"]').should(
      'contain.text',
      'გამოიყენეთ მინ. 2 სიმბოლო!'
    );

    cy.get('#name').clear();
    cy.get('#orbit-radius').clear();
    cy.get('#instrument').clear();
  });

  it('color input handles displaying error messages', () => {
    cy.get('#text-color').type('#not-a-color');

    cy.get('[data-test-id="update-form-submit-button"]').click();
    cy.get('[data-test-id="color-error-message"]').should(
      'contain.text',
      'უნდა ემთხვეოდეს HEX ფორმატს!'
    );

    cy.get('#text-color').clear();
    cy.get('[data-test-id="color-error-message"]').should(
      'contain.text',
      'ფერი სავალდებულოა!'
    );

    cy.get('#text-color').type('#not-a-color');
    cy.get('[data-test-id="color-error-message"]').should(
      'contain.text',
      'უნდა ემთხვეოდეს HEX ფორმატს!'
    );
    cy.get('#text-color').clear();
  });

  it('submitting valid form creates new member', () => {
    cy.addMember();

    cy.url().should('not.include', 'create');

    cy.get('[data-test-id="dashboard-card-nav-button-1"]').click();
    cy.get('[data-test-id="member-card-name"]').should('contain.text', 'ქაშა');
  });

  it('loading spinner shows up when waiting for server response', () => {
    cy.get('[data-test-id="link-to-member-create"]').click();

    cy.addMember(5000);
    cy.get('[data-test-id="loading-spinner"]').should('be.visible');
  });

  it('auth error redirects user to page 403', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.visit('/band/members/create');

    cy.addMember(null, 403);
    cy.url().should('include', '403');
  });

  it('internal error redirects user to page 500', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });
    cy.visit('/band/members/create');

    cy.addMember(null, 500);
    cy.url().should('include', '500');
  });
});
