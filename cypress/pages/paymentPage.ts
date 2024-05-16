export const paymentPage = {
  nameOnCardField: () => cy.get("[data-qa='name-on-card']"),
  cardNumberField: () => cy.get("[data-qa='card-number']"),
  cvcField: () => cy.get("[data-qa='cvc']"),
  expirationField: () => cy.get("[data-qa='expiry-month']"),
  yearField: () => cy.get("[data-qa='expiry-year']"),
  payAndConfirmButton: () => cy.get("#submit"),
};
