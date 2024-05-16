export const loginPage = {
  signUpButton: () => cy.get('[data-qa="signup-button"]'),

  nameField: () => cy.get('[name="name"]'),

  emailAddressField: () => cy.get('[data-qa="signup-email"]'),

  loginEmailField: () => cy.get('[data-qa="login-email"]'),
  loginPasswordField: () => cy.get('[data-qa="login-password"]'),
  loginButton: () => cy.get('[data-qa="login-button"]'),
};
