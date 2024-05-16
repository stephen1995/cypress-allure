export const products = {
  quantityField: () => cy.get("#quantity"),

  addToCartButton: () => cy.contains("Add to cart"),

  viewCartLink: () => cy.contains("View Cart"),

  proceedToCheckoutButton: () => cy.contains("Proceed To Checkout"),
  registerLoginLink: () => cy.xpath("//u[(text()='Register / Login')]"),
};
