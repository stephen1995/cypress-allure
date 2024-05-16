import { products } from "../pages/products";
import { homePage } from "../pages/homePage";
import { loginPage } from "../pages/loginPage";
import { singUpPage } from "../pages/singUpPage";
import { accountCreatedPage } from "../pages/accountCreatedPage";
import { viewCartPage } from "../pages/viewCartPage";
import { checkoutPage } from "../pages/checkoutPage";
import { paymentPage } from "../pages/paymentPage";
import { paymentDonePage } from "../pages/paymentDonePage";
import { contactUsPage } from "../pages/contactUsPage";

describe("User flow  - Apply digital", { tags: "@smoke" }, () => {
  it("Flow B", () => {
    cy.visit("/");
    cy.goToMiddleOfThePage();
    homePage.allViewProductButtons().first().click();
    products.quantityField().clear().type("30");
    products.addToCartButton().click();
    products.viewCartLink().click();
    products.proceedToCheckoutButton().click();
    products.registerLoginLink().click();
    cy.generateNameFromTime().then((name) => {
      loginPage.nameField().type(name);
    });
    cy.generateEmailFromTime().then((email) => {
      loginPage.emailAddressField().type(email);
    });

    loginPage.signUpButton().click();

    singUpPage.passwordField().type("Exitoso2024.");
    singUpPage.firstNameField().type("testerFirst");
    singUpPage.lastNameField().type("testerLast");
    singUpPage.cityField().type("New York");
    singUpPage.addressField().type("Avenue testing");
    singUpPage.mobileNumberField().type("512 940 315 1");
    singUpPage.zipCodeField().type("15307");
    singUpPage.stateField().type("Arizona");
    singUpPage.createAccountButton().click();
    accountCreatedPage.continueButton().click();
    homePage.cartLink().click();
    viewCartPage.proceedToCheckoutButton().click();
    checkoutPage.messageTextAreaField().type("testing message");
    checkoutPage.placeOrderButton().click();
    paymentPage.nameOnCardField().type("Tester");
    paymentPage.cardNumberField().type("99999999999");
    paymentPage.cvcField().type("123");
    paymentPage.expirationField().type("10");
    paymentPage.yearField().type("2028");
    paymentPage.payAndConfirmButton().click();
    paymentDonePage.continueButton().click();
    homePage.logoutLink().click();
    cy.get("@generatedEmail").then((email) => {
      loginPage.loginEmailField().type(email);
    });
    loginPage.loginPasswordField().type("Exitoso2024.");
    loginPage.loginButton().click();
    homePage.contactUsLink().click();
    cy.get("@generatedEmail").then((email) => {
      contactUsPage.emailField().type(email);
    });
    contactUsPage.submitButton().click();
    homePage.logoutLink().click();
  });
});
