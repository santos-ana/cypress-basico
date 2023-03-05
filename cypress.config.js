const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'spnk3d',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
