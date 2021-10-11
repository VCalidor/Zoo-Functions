const data = require('../data/zoo_data');

const { species } = require('../data/zoo_data');

function sort(object) {
  const obj = object;
  const keys = Object.keys(obj);

  keys.forEach((locations) => {
    obj[locations].forEach((animal, index) => {
      const array = obj[locations][index][Object.keys(animal)[0]].sort();
      obj[locations][index][Object.keys(animal)[0]] = array;
    });
  });

  return obj;
}

function filterUndefined(lele, anis) {
  const lili = lele;
  lili.forEach((animal, index) => {
    lili[index][anis[index]] = lili[index][anis[index]].filter((resi) => resi !== undefined);
  });

  return lili;
}

function genderResidents(anis, options) {
  let lele = [];

  anis.forEach((ani) => {
    lele.push({ [ani]: species.find((spe) => spe.name === ani).residents.map((res) => {
      if (res.sex === options.sex) {
        return res.name;
      }
      return undefined;
    }) });
  });

  lele = filterUndefined(lele, anis);

  return lele;
}

function getResidents(local, options) {
  const anis = species.filter((specie) => local === specie.location).map((animal) => animal.name);

  let lal = [];

  if (options.sex !== undefined) {
    lal = genderResidents(anis, options);
  } else {
    anis.forEach((ani) => {
      lal.push({ [ani]: species.find((spe) => spe.name === ani).residents.map((res) => res.name) });
    });
  }
  return lal;
}
function getAnimalsWithLocation(local) {
  const array = species.filter((specie) => local === specie.location);
  return array.map((specie) => specie.name);
}

function noParams() {
  return {
    NE: getAnimalsWithLocation('NE'),
    NW: getAnimalsWithLocation('NW'),
    SE: getAnimalsWithLocation('SE'),
    SW: getAnimalsWithLocation('SW'),
  };
}

function withParams(options) {
  const resulted = {
    NE: getResidents('NE', options),
    NW: getResidents('NW', options),
    SE: getResidents('SE', options),
    SW: getResidents('SW', options),
  };

  return resulted;
}

function getAnimalMap(options = {}) {
  // seu código aqui
  let result;

  if (Object.values(options).length === 0 || options.includeNames === undefined) {
    result = noParams();
  } else {
    result = withParams(options);
  }

  if (options.sorted === true && options.includeNames === true) {
    sort(result);
  }

  return result;
}

/// getAnimalMap({ includeNames: true, sorted: true, sex: 'female' });

module.exports = getAnimalMap;
