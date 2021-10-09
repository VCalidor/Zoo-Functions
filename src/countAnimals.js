const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const allAnimals = {};
    data.species.forEach((specie) => {
      allAnimals[specie.name] = specie.residents.length;
    });
    return allAnimals;
  }
  if (Object.keys(animal).length === 1) {
    return data.species.find((specie) => specie.name === animal.specie).residents.length;
  }

  const lastCase = data.species.find((specie) => specie.name === animal.specie);

  return lastCase.residents.filter((resident) => resident.sex === animal.sex).length;
}

module.exports = countAnimals;
