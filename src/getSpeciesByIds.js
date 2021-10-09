const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids === undefined) {
    return [];
  }

  const species = data.species.filter((specie) => {
    console.log(ids.includes(specie.id));
    return ids.includes(specie.id);
  });

  return species;
}

module.exports = getSpeciesByIds;
