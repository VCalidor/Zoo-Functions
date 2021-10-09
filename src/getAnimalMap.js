const data = require('../data/zoo_data');

function getAnimalMap(options) {
  // seu código aqui
  if (options === undefined) {
    return {
      NE: data.species.filter((specie) => specie.location === 'NE').map((specie) => specie.name),
      NW: data.species.filter((specie) => specie.location === 'NW').map((specie) => specie.name),
      SE: data.species.filter((specie) => specie.location === 'SE').map((specie) => specie.name),
      SW: data.species.filter((specie) => specie.location === 'SW').map((specie) => specie.name),
    };
  }
}

console.log(getAnimalMap());
module.exports = getAnimalMap;
