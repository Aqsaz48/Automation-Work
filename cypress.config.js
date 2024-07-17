const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    firstName: "Aqsa",
    invalidEmail:"aqsa@aaa",
    lastName: "Zia",
    mobileNumber: "543563252",
    validPassword: "543563252Aqsa",
    shortPassword: "aqsa12",
    alphabetPasswordOnly:"aqsaziaa",
    numberPasswordOnly:"12345678",
    duplicatedEmail: "aqsazia48@gmail.com",
    viewportWidth: 1690,
    viewportHeight: 1000
  },
  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
