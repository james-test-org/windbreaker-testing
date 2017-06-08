const Promise = require('bluebird');
const gkdt = require('greenkeeper-dep-test');

module.exports = () =>
  Promise.resolve('foo')
    .then(s => gkdt());
