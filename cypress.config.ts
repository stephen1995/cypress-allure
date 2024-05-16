import { defineConfig } from "cypress";
import allureWriter from "@shelex/cypress-allure-plugin/writer";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //ALLURE CONFIG
      allureWriter(on, config);
      //SETUP ENV
      const version = config.env.version || "local";
      config.env = require(`./cypress/config/${version}.json`);
      config.baseUrl = config.env.baseUrl;
      return config;
    },
    env: { allureReuseAfterSpec: true },
    defaultCommandTimeout: 6000,
  },
});
