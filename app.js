
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
// const awilix = require('awilix');

// const awilixRegistrationObject = require('./container/awilix-container');
const awilixMiddleware = require('./container/awilix-container');

const router = require('./src/routes');
const { getAll } = require('./src/controllers/Person.controller');
const Person = require('./src/models/Person.model');

const app = express();
const port = process.env.PORT || 7777;

app
  .use(helmet())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(awilixMiddleware)
  .use(router)
  .listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
