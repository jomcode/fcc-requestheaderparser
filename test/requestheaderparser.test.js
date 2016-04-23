const expect = require('chai').expect;

const requestHeaderParser = require('../index').requestHeaderParser;

describe('request header parser microservice', () => {
  const fakeHeaders = {};

  it('returns object with ipaddress, language, and software properties', () => {
    const result = requestHeaderParser(fakeHeaders);
    expect(result).to.have.property('ipaddress');
    expect(result).to.have.property('language');
    expect(result).to.have.property('software');
  });
});
