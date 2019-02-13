const http = require('http');
const Reader = require('mmdb-reader');

const { PORT = 3000 } = process.env;

let reader;

const server = http.createServer((req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  if (reader) {
    const results = reader.lookup(ip);

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(results));
    return;
  }

  Reader.open('./data/GeoLite2-City.mmdb', (error, newReader) => {
    if (error) {
      console.error(error);
      res.statusCode = 500;
      res.end(error.message);
    }

    reader = newReader;
    const results = reader.lookup(ip);

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(results));
  });
});

server.listen(PORT);
