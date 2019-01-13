
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 7777;

app
  .use(helmet())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
