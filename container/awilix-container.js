
const awilix = require('awilix');

const Person = require('../src/models/Person.model');
const { getAll } = require('../src/controllers/Person.controller');


const awilixRegistrationObject = {
  getAll: awilix.asFunction(getAll),
  personModel: awilix.asClass(Person),
}

module.exports = (req, res, next) => {
  req.scope = awilix
  .createContainer({
      injectionMode: awilix.InjectionMode.PROXY,
  })
    .createScope();
  
  req.scope.register(awilixRegistrationObject);

  next();
};
