const express = require('express');
require('dotenv/config');
const app = express();

app.listen(3201);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/flex2.html');
});

app.use('/', express.static(__dirname + '/'));

app.get('/json', (req, res) => {
  res.json({
    message: process.env.MESSAGE_STYLE === 'uppercase' ? 'HELLO JSON' : 'Hello json',
  });
});
