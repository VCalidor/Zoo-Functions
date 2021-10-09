const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

let employeed;

function isManager(id) {
  // seu código aqui
  employeed = data.employees.find((employee) => employee.id === id);
  console.log(employeed);
  if (employeed.managers.length <= 1) {
    return true;
  }
  console.log(false);
  return false;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const boolean = isManager(managerId);
  if (boolean === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const colaborators = employees.filter((employee) => employee.managers.includes(employeed.id));

  return colaborators.map((col) => `${col.firstName} ${col.lastName}`);
}

console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = { isManager, getRelatedEmployees };
