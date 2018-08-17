require('dotenv').config();
const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');

const app = express();

app.use(express.static(path.resolve(__dirname, '../..', 'client/dist')));
app.use(express.static(path.resolve(__dirname, 'static')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../..', 'client/dist/index.html'));
});

app.get('/health-check', (req, res) => res.sendStatus(200));

app.listen(process.env.PORT);

if (process.env.NODE_ENV === 'production') {
  const options = {
    cert: fs.readFileSync(path.resolve(__dirname, 'sslcert/fullchain.pem')),
    key: fs.readFileSync(path.resolve(__dirname, 'sslcert/privkey.pem')),
  };
  https.createServer(options, app).listen(443);
}

