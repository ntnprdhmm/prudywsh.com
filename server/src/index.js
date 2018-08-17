require('dotenv').config();
const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');
const api = require('./routes/api.js');

const app = express();

// static folders
app.use(express.static(path.resolve(__dirname, '../..', 'client/dist')));
app.use(express.static(path.resolve(__dirname, 'static')));

// handle api routes
app.use('/api', api);

// by default, return the app
app.get('*', (_, res) => {
  res.sendFile(path.resolve(__dirname, '../..', 'client/dist/index.html'));
});

app.listen(process.env.PORT);

// enable https in production mode
if (process.env.NODE_ENV === 'production') {
  const options = {
    cert: fs.readFileSync(path.resolve(__dirname, 'sslcert/fullchain.pem')),
    key: fs.readFileSync(path.resolve(__dirname, 'sslcert/privkey.pem')),
  };
  https.createServer(options, app).listen(443);
}
