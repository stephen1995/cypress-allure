describe("Login", { tags: "@smoke" }, () => {
  it("Should login in to the application", () => {
    cy.loginWeb();
  });
});
