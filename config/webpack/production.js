process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')

const definePlugin = environment.plugins.get('Define');
definePlugin.definitions.PRODUCTION = JSON.stringify(true);

module.exports = environment.toWebpackConfig()
