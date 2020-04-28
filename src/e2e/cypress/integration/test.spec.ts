context("Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("index html", () => {
    cy.get("body").should("contain", "Hello World");
  });

  it("hello request", () => {
    cy.request("/hello")
      .its('body')
      .should('contain', {
        greeting: 'Hello World'
      });
  });
});
