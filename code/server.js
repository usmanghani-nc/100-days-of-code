const express = require('express');
const bodyParser = require('body-parser');
require('dotenv/config');
const app = express();

app.listen(3201);

const midWare = (req, res, next) => {
  console.log(req.method, req.path, '-', req.ip);

  next();
};

const timeWare = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(midWare);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/form.html');
});

app.use('/', express.static(__dirname + '/'));

// app.get('/now', timeWare, (req, res) => {
//   res.json({ time: req.time });
// });

app.get('/:word/echo', (req, res) => {
  const { word } = req.params;

  res.json({ echo: word });
});

app.get('/name', (req, res) => {
  const { first, last } = req.query;

  res.json({ name: `${first} ${last}` });
});

app.post('/name', (req, res) => {
  console.log(req.body);
  const { first, last } = req.body;

  res.send({ name: `${first} ${last}` });
});

app.get('/json', (req, res) => {
  res.json({
    message: process.env.MESSAGE_STYLE === 'uppercase' ? 'HELLO JSON' : 'Hello json',
  });
});
