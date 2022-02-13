/**
 * More information about the WebdriverIO config can be found here:
 * https://webdriver.io/docs/configurationfile.html
 */
exports.config = {
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',

    // ==================
    // Specify Test Files
    // ==================
    specs: ['./specs/Login.spec.js'],

    // ============
    // Capabilities
    // ============
    // The specific capabilities can be found in the separate files
    maxInstances: 10,

    // ===================
    // Test Configurations
    // ===================
    logLevel: 'silent',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 45000,
    connectionRetryTimeout: 180000,
    connectionRetryCount: 3,
    services: [],
    reporters: ['spec'],
    framework: 'jasmine',
    //
    // If you are using Cucumber you need to specify the location of your step definitions.
    jasmineOpts: {
        defaultTimeoutInterval: 180000,
    },

    // =====
    // Hooks
    // =====
    before: () => {
        /**
         * Custom property that is used to determine if the app is already launched for the first time
         * This property is needed because the first time the app is automatically started, so a double
         * restart is not needed.
         */
        driver.firstAppStart = true;
    }
}