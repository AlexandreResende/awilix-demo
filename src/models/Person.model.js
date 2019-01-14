
class Person {
  constructor() {
    this.person = [{
      name: 'Pedro',
      age: 23,
    }, {
      name: 'Peter',
      age: 32,
    }, {
      name: 'Joao',
      age: 45,
    }];
  }

  addPerson(data) {
    this.person.push(data);
  }

  getAll() {
    return this.person;
  }

  updatePerson(index, data) {
    for (let key in data) {
      this.person[index][key] = data[key];
    }
  }

  deletePerson(index) {
    this.person.slice(index, index+1);
    console.log(this.person);
  }
}

module.exports = Person;
