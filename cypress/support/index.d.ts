/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        clearSessionStorage(): Chainable<Element>
    }
}
