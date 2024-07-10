import { defineConfig } from 'cypress';


module.exports = defineConfig({
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {

    }
  }
});