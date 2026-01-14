const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://katalon-demo-cura.herokuapp.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    defaultCommandTimeout: 5000,
    viewportHeight: 1080,
    viewportWidth: 1920,

    chromeWebSecurity: true,
    pageLoadTimeout : 60000
  },
});
