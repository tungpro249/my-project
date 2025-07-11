describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    cy.url().should("include", "/commands/actions");

    cy.get(".action-email")
      .type("aRvH4@example.com")
      .should("have.value", "aRvH4@example.com"); // check input value
    cy.get(".action-focus").focus();

    cy.get(".action-focus")
      .should("have.class", "focus")
      .prev()
      .should("have.attr", "style", "color: orange;");
  });
});
