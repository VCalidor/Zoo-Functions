const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }

  const caseFirstName = data.employees.find((employee) => employee.firstName === employeeName);
  const caseLastName = data.employees.find((employee) => employee.lastName === employeeName);

  if (typeof caseFirstName === 'object') {
    return caseFirstName;
  } return caseLastName;
}

module.exports = getEmployeeByName;
