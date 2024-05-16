export const singUpPage = {
  signUpButton: () => cy.get('[data-qa="signup-button"]'),

  nameField: () => cy.get('[name="name"]'),

  firstNameField: () => cy.get("#first_name"),
  lastNameField: () => cy.get("#last_name"),
  addressField: () => cy.get("#address1"),
  stateField: () => cy.get("#state"),
  passwordField: () => cy.get("#password"),
  cityField: () => cy.get("#city"),
  zipCodeField: () => cy.get("#zipcode"),
  mobileNumberField: () => cy.get("#mobile_number"),
  createAccountButton: () => cy.get('[data-qa="create-account"]'),
};
