const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

environment.plugins.prepend(
    'Define',
    new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(false),
    })
);

module.exports = environment
