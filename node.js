const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const path = require('path');

const app = express();
app.use(express.static(`${__dirname}/../react-client/dist`));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/client/index.html`));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

var http = require("http");
