declare namespace Cypress {
  interface Chainable<Subject = any> {
    goToMiddleOfThePage(): Chainable<any>;
    generateNameFromTime();
    generateEmailFromTime();
  }
}

Cypress.Commands.add("goToMiddleOfThePage", () => {
  cy.window().then((win) => {
    const docHeight = win.document.documentElement.scrollHeight;
    const halfway = docHeight / 2;
    cy.scrollTo("top", halfway);
  });
});

Cypress.Commands.add("generateNameFromTime", () => {
  const currentTime = new Date();
  const timeString = currentTime.getTime().toString();
  const randomSuffix = Math.floor(Math.random() * 1000);
  const name = `User${timeString}${randomSuffix}`;

  return name;
});

Cypress.Commands.add("generateEmailFromTime", () => {
  const currentTime = new Date();
  const timeString = currentTime.getTime().toString();
  const randomSuffix = Math.floor(Math.random() * 1000);
  const email = `user${timeString}_${randomSuffix}@example.com`;

  cy.wrap(email).as("generatedEmail");
});
