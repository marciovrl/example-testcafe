const HomePage = require("../pages/homePage.js");
const ListPage = require("../pages/listPage.js");
const Selector = require("testcafe").Selector;

const { defineSupportCode } = require("cucumber");
const home = new HomePage();
const list = new ListPage();

defineSupportCode(({ Given, When, Then }) => {
  let testController = null;

  Given("that it is on the homepage of Mercado Livre", function() {
    return this.waitForTestController().then(controller => {
      testController = controller;
      return testController.navigateTo("https://www.mercadolivre.com.br/");
    });
  });

  When("I search for {stringInDoubleQuotes}", function(item) {
    return testController
      .typeText(home.inputSearch, item)
      .click(home.buttonSearch);
  });

  Then("I view items according to my search", function() {
    return testController.expect(list.labelResult).contains("Golf");
  });
});
