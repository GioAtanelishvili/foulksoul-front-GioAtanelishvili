describe('band about page', () => {
  beforeEach(() => {
    cy.stubImageRequests();
  });

  it('loads successfully', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data);
    });

    cy.login();
    cy.visit('/band/about');

    cy.get('[data-testid="band-about-page-section"]').should('be.visible');
    cy.get('[data-testid="band-info-article"]').should(
      'contain.text',
      'ძალიან საინტერესო ბიოგრაფია.'
    );
  });

  it('loading spinner shows up when waiting for server response', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests(data, 5000);
    });

    cy.reload();

    cy.get('[data-testid="loading-spinner"]').should('be.visible');
  });

  it('message is displayed if band info is empty', () => {
    cy.fixture('data.json').then((data) => {
      cy.stubGetRequests({
        ...data,
        bandDetails: { info: '', imagePath: '' },
      });
    });

    cy.reload();

    cy.contains('ბენდის შესახებ ინფორმაცია დამატებული არ არის.').should(
      'be.visible'
    );
  });

  it('clicking edit button takes user to edit band page', () => {
    cy.get('[data-testid="link-to-band-edit"]').click();
    cy.url().should('include', 'edit');
  });
});
