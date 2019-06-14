// vue.config.js
module.exports = {
    devServer: {
        host: 'localhost.pixar.com',
        port: 8080, // CHANGE YOUR PORT HERE!
        https: false,
        hotOnly: false,
        watchOptions: {
            poll: true,
        },
    },
}
