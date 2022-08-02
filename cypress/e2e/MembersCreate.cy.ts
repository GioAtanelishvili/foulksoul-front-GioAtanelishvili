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

    cy.get('[data-testid="link-to-member-create"]').click();
    cy.url().should('include', 'create');
    cy.get('[data-testid="members-update-form"]').should('be.visible');
  });

  it('submitting empty fields displays error messages', () => {
    cy.get('[data-testid="update-form-submit-button"]').click();

    cy.contains('სახელი სავალდებულოა!').should('be.visible');
    cy.contains('ფერი სავალდებულოა!').should('be.visible');
    cy.contains('ბიოგრაფია სავალდებულოა!').should('be.visible');
  });

  it('submitting invalid form data displays error messages', () => {
    cy.get('#name').type('babnika');
    cy.get('#orbit-radius').type('not a number');
    cy.get('#instrument').type('გ');

    cy.get('[data-testid="update-form-submit-button"]').click();

    cy.contains('გამოიყენეთ მხოლოდ ქართული ასოები!').should('be.visible');
    cy.contains('გამოიყენეთ მხოლოდ ციფრები!').should('be.visible');
    cy.contains('გამოიყენეთ მინ. 2 სიმბოლო!').should('be.visible');

    cy.get('#name').clear();
    cy.get('#orbit-radius').clear();
    cy.get('#instrument').clear();
  });

  it('color input handles displaying error messages', () => {
    cy.get('#text-color').type('#not-a-color');

    cy.get('[data-testid="update-form-submit-button"]').click();
    cy.contains('უნდა ემთხვეოდეს HEX ფორმატს!').should('be.visible');

    cy.get('#text-color').clear();
    cy.contains('ფერი სავალდებულოა!').should('be.visible');

    cy.get('#text-color').type('#not-a-color');
    cy.contains('უნდა ემთხვეოდეს HEX ფორმატს!').should('be.visible');
    cy.get('#text-color').clear();
  });

  it('submitting valid form creates new member', () => {
    cy.addMember();

    cy.url().should('not.include', 'create');

    cy.get('[data-testid="dashboard-card-nav-button-1"]').click();
    cy.contains('ქაშა').should('be.visible');
  });

  it('loading spinner shows up when waiting for server response', () => {
    cy.get('[data-testid="link-to-member-create"]').click();

    cy.addMember(5000);
    cy.get('[data-testid="loading-spinner"]').should('be.visible');
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
