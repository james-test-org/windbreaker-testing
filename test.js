const dumbThing = require('.');
const {expect} = require('chai').use(require('chai-as-promised'));

describe('dumb thing', () => {
  it('returns foo', () => expect(dumbThing()).to.eventually.equal('foo'));
});
