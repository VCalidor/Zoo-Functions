const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const gettingAnimal = data.species.filter((animals) => animals.name === animal)[0];

  const isEveryAnimalOlder = gettingAnimal.residents.every((resident) => resident.age >= age);

  return isEveryAnimalOlder;
}

module.exports = getAnimalsOlderThan;
