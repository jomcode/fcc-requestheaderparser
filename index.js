'use strict';
const http = require('http');

const port = process.env.PORT || 3000;

const requestHeaderParser = (headers) => {
  const softwareRe = /[a-z\s\d\.:;]+(?=\))/i;
  const languageRe = /.+(?=,)/;

  const ipaddress = headers['host'].slice(0);
  const language = languageRe.exec(headers['accept-language'].slice(0))[0];
  const software = softwareRe.exec(headers['user-agent'].slice(0))[0];

  return { ipaddress, language, software };
};

module.exports.requestHeaderParser = requestHeaderParser;

const server = http.createServer((req, res) => {
  const result = requestHeaderParser(req.headers);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(result));
});

const startServer = () => server.listen(port, (err) => {
  if (err) return console.error(err);
  console.log(`server listening on port ${port}`);
});

const args = process.argv.slice(0);
if (args.length > 2 && args[2] === 'start') startServer();
