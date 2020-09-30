const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          VUE_APP_VERSION:
            '"' + escape(JSON.stringify(require('./package.json'))) + '"',
        },
      }),
    ],
  },

  transpileDependencies: ['vuetify'],
}
