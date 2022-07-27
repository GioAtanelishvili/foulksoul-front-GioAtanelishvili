export {};

declare global {
  namespace Cypress {
    interface Chainable {
      stubGetRequests(res: any, delay?: number): Chainable<Element>;
      login(): Chainable<Element>;
    }
  }
}
