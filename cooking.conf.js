var path = require('path');
var cooking = require('cooking');

cooking.set({
  entry: {
    app: './src/main.ts'
  },
  dist: './dist',
  template: './src/index.tpl',

  devServer: {
    port: 8080,
    publicPath: '/',
    proxy: {
      '*': {
        target: 'https://cnodejs.org/api/v1',
        secure: false
      }
    }
  },

  // production
  clean: true,
  hash: true,
  sourceMap: true,
  chunk: [
    {
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, 'node_modules')
          ) === 0
        );
      }
    },
    {
      // extract webpack runtime and module manifest to its own file in order to
      // prevent vendor hash from being updated whenever app bundle is updated
      name: 'manifest',
      chunks: ['vendor']
    }
  ],
  
  publicPath: '/dist/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: '[name].[contenthash:7].css',
  extends: ['vue',  'sass', ]
});

cooking.add('resolve.alias', {
  'src': path.join(__dirname, 'src')
});

cooking.add('loader.ts', {
  test: /\.ts$/,
  exclude: /node_modules|vue\/src/,
  loader: 'ts-loader',
  options: {
    appendTsSuffixTo: [/\.vue$/]
  }
})

module.exports = cooking.resolve();
