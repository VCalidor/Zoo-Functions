const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids === undefined) {
    return [];
  }

  const species = data.species.filter((specie) => ids.includes(specie.id));

  return species;
}

module.exports = getSpeciesByIds;
