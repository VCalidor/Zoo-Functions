const data = require("../data/zoo_data");

function getSpeciesByIds(ids) {
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

console.log(getSpeciesByIds(['89be95b3-47e4-4c5b-b687-1fabf2afa274','e8481c1d-42ea-4610-8e11-1752cfc05a46']))
module.exports = getSpeciesByIds;
