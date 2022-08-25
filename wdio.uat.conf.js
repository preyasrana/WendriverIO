const merge = require('deepmerge')

const wdioconf = require('./wdio.conf.js')

exports.config = merge(wdioconf.config, {

    baseUrl: "https://ecommerce-playground.lambdatest.io/",

    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        grep: "Sanity"
    },
})