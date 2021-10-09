const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isItUndefined(funcionario, key) {
  const emp = data.employees.find((employee) => employee[key] === funcionario.name);
  if (emp === undefined && key === 'lastName') {
    throw new Error('Informações inválidas');
  }
  return emp;
}

// Pegar funcionario
function getFuncionario(funcionario) {
  if (funcionario.name !== undefined) {
    const func1 = isItUndefined(funcionario, 'firstName');

    if (func1 === undefined) {
      const func2 = isItUndefined(funcionario, 'lastName');
      return func2;
    }
    return func1;
  }

  const func3 = data.employees.find((employee) => employee.id === funcionario.id);

  if (func3 === undefined) {
    throw new Error('Informações inválidas');
  } return func3;
}

// Pegar especies dos funcionarios
function getEmployeesSpecies(funcionario) {
  const colaborators = funcionario.responsibleFor.reduce((col1, col2) => `${col1}, ${col2}`);
  return species.filter((specie) => colaborators.includes(specie.id));
}
function getEmployeesCoverage(employee) {
  if (employee === undefined) {
    const empCover = data.employees.map((funcionario) => {
      const especies = getEmployeesSpecies(funcionario);
      return {
        id: funcionario.id,
        fullName: `${funcionario.firstName} ${funcionario.lastName}`,
        species: especies.map((specie) => specie.name),
        locations: especies.map((specie) => specie.location),
      };
    }); return empCover;
  }
  const funcionario = getFuncionario(employee);
  const especies = getEmployeesSpecies(funcionario);
  return {
    id: funcionario.id,
    fullName: `${funcionario.firstName} ${funcionario.lastName}`,
    species: especies.map((specie) => specie.name),
    locations: especies.map((specie) => specie.location) };
}

/// console.log(getEmployeesCoverage({name: 'Strauss'}));

module.exports = getEmployeesCoverage;
