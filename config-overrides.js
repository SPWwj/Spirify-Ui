const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = function override(config, env) {
  let plugin = new CopyWebpackPlugin({
    patterns: [
      {
        from: 'node_modules/ace-builds/src-noconflict',
        to: 'static/js'
      }
    ]
  });

  config.plugins = (config.plugins || []).concat([plugin]);

  return config;
}
