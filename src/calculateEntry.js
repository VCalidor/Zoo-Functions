const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui

  const childs = entrants.filter((person) => person.age < 18);
  const adults = entrants.filter((person) => person.age >= 18 && person.age < 50);
  const seniors = entrants.filter((person) => person.age >= 50);

  return {
    child: childs.length,
    adult: adults.length,
    senior: seniors.length,
  };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }

  const group = countEntrants(entrants);
  const { prices } = data;
  return group.child * prices.child + group.adult * prices.adult + group.senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
