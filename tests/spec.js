/**
 * Created by tavete on 29/09/16.
 */
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Protractor Demo App', function() {
    var EC = protractor.ExpectedConditions;

    it('should have a title', function(done) {
        browser.get('https://cs-dev.tbxnet.com/');

        var inputUsername = element(by.model('credentials.mail'));
        var inputPassword = element(by.model('credentials.password'));

        expect(inputUsername.isDisplayed()).to.eventually.be.true;
        expect(inputPassword.isDisplayed()).to.eventually.be.true;
        done();
    });
});