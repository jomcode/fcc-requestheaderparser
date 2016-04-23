const expect = require('chai').expect;

const requestHeaderParser = require('../index').requestHeaderParser;

describe('request header parser microservice', () => {
  const fakeHeaders = {
    host: '127.0.0.1'
  };

  it('returns object with ipaddress, language, and software properties', () => {
    const result = requestHeaderParser(fakeHeaders);
    expect(result).to.have.property('ipaddress');
    expect(result).to.have.property('language');
    expect(result).to.have.property('software');
  });

  it('properly parses the ipaddress', () => {
    const result = requestHeaderParser(fakeHeaders);
    expect(result).to.have.property('ipaddress', '127.0.0.1');
  });
});
