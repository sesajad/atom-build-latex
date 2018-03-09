const package = require('../package.json')

module.exports = {
  config: require('./config.js').default,
  activate: () => {
    require('atom-package-deps').install(package.name);
  },
  provideBuilder: require('./provider.js')
};
