/**
 * Created by tavete on 29/09/16.
 */
exports.config = {
    framework: 'mocha',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    mochaOpts: {
        reporter: "spec",
        slow: 60000,
        timeout: 60000
    }
}