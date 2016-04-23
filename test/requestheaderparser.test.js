const expect = require('chai').expect;

const requestHeaderParser = require('../index').requestHeaderParser;

describe('request header parser microservice', () => {
  const fakeHeaders = {
    'x-forwarded-for': '127.0.0.1',
    'accept-language': 'en-US,en;q=0.5',
    'user-agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0'
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

  it('properly parses the language', () => {
    const result = requestHeaderParser(fakeHeaders);
    expect(result).to.have.property('language', 'en-US');
  });

  it('properly parses the software', () => {
    const result = requestHeaderParser(fakeHeaders);
    expect(result).to.have.property('software', 'Windows NT 6.3; WOW64; rv:45.0');
  });
});
