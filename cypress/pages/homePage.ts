export const homePage = {
  allViewProductButtons: () => cy.xpath("//a[contains(text(), 'View')]"),
  cartLink: () => cy.contains("Cart"),
  logoutLink: () => cy.contains("Logout"),
  contactUsLink: () => cy.contains("Contact us"),
};
