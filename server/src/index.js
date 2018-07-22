require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '../..', 'client/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../..', 'client/dist/index.html'));
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
