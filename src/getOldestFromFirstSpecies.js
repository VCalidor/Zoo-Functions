const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const funcionario = data.employees.find((employee) => employee.id === id);

  const animalId = funcionario.responsibleFor[0];

  const animals = data.species.find((specie) => specie.id === animalId);
  let animal = animals.residents[0];
  animals.residents.forEach((resident) => {
    if (resident.age > animal.age) {
      animal = resident;
    }
  });

  return [animal.name, animal.sex, animal.age];
}

module.exports = getOldestFromFirstSpecies;
