const Promise = require('bluebird');

module.exports = () =>
  Promise.resolve('foo')
    .then(s => s);
