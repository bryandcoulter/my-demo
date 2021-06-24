'use strict';
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');
const port = 8010;
const success = 200;
const failure = 500;
const ifaces = os.networkInterfaces();

const options = {
  
};

http.createServer(async (req, res) => {
  console.log('request starting...'); // eslint-disable-line no-console

  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './index.html';
  }
  let extname = path.extname(filePath);
  let contentType = 'text/html';
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
    case '.wav':
      contentType = 'audio/wav';
      break;
    default:
      contentType = 'text/html';
      break;
  }


  fs.readFile(filePath, function(error, content) {
    if (error) {
      res.writeHead(failure);
      res.end(`Sorry, check with the site admin for error: ${error.code} ..\n`);
      res.end();
    } else {
      res.writeHead(success, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
}).listen(port);
Object.keys(ifaces).forEach(function (dev) {
  ifaces[dev].forEach(function (details) {
    if (details.family === 'IPv4') {
      console.log(('  http://' + details.address + ':' + port.toString()));
    }
  });
});