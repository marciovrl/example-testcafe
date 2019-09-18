const Selector = require("testcafe").Selector;

module.exports = class HomePage {
  constructor() {
    this.inputSearch = Selector(".nav-search-input");
    this.buttonSearch = Selector(".nav-search-btn");
  }
};
