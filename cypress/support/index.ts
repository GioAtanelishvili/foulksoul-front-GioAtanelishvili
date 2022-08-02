export {};

declare global {
  namespace Cypress {
    interface Chainable {
      saveLocalStorage(): Chainable<Element>;
      restoreLocalStorage(): Chainable<Element>;
      stubGetRequests(res: any, delay?: number): Chainable<Element>;
      stubImageRequests(): Chainable<Element>;
      login(): Chainable<Element>;
      addMember(delay?: number, statusCode?: number): Chainable<Element>;
      addSocialMedia(delay?: number, statusCode?: number): Chainable<Element>;
    }
  }
}
