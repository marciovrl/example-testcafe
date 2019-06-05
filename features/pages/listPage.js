const Selector = require('testcafe').Selector;

module.exports =  class ListPage {
    constructor (testController) {
        this.labelResult = Selector('.section search-results list-view grid search-results-mot list--has-row-logos ').with({ boundTestRun: testController });
    }
}