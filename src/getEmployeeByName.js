const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }

  const caseFirstName = data.employees.filter((employee) => employee.firstName === employeeName)[0];
  const caseLastName = data.employees.filter((employee) => employee.lastName === employeeName)[0];

  if (typeof caseFirstName === 'object') {
    return caseFirstName;
  } return caseLastName;
}

module.exports = getEmployeeByName;
