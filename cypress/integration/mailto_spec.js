describe("mailtolink.me", function () {
  beforeEach(function () {
    cy.visit("https://mailtolink.me/");
  });

  it("should load the page", function () {
    cy.contains("mailtolink.me");
  });

  it("should not show the mailto link by default", function () {
    cy.get(".output").should("not.be.visible");
  });

  it("should show a mailto link when I add my email address", function () {
    cy.get("#recipient").type("jeff@cypress.io");
    cy.get(".output")
      .should("be.visible")
      .and("contain", "mailto:jeff@cypress.io");
  });
});
