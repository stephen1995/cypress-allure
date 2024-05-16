import './commands'
import '@shelex/cypress-allure-plugin';

require("cypress-xpath");
const registerCypressGrep = require("@cypress/grep");
registerCypressGrep();

Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
