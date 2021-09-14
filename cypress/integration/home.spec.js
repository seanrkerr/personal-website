/// <reference types="cypress" />

describe("personal website", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:3000");
  });

  it("has an h1", () => {
    cy.get("h1").should("have.length", 1);
  });
});
