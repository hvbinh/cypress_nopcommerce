const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    projectId: "bee",
    specPattern: "./cypress/Modal/TC/**.*",
    baseUrl: "https://demo.nopcommerce.com/"
  },
});
