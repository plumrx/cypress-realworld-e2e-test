const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: './cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'https://vue3-realworld-example-app-mutoe.vercel.app',
    defaultCommandTimeout:10000,
  },
})
