export const checkoutPage = {
  messageTextAreaField: () => cy.get("[name=message]"),
  placeOrderButton: () => cy.contains("Place Order"),
};
