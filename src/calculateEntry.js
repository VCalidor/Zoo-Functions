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
  console.log(prices);
  return group.child * prices.child + group.adult * prices.adult + group.senior * prices.senior;
}

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

countEntrants(entrants);
module.exports = { calculateEntry, countEntrants };
