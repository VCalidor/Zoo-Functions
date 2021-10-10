const data = require('../data/zoo_data');

const days = Object.keys(data.hours);
const animals = data.species.map((specie) => specie.name);

function filterUndefinedAll(result) {
  const resultado = result;

  Object.keys(resultado).forEach((day) => {
    const newArray = [];
    if (typeof resultado[day].exhibition !== 'string') {
      resultado[day].exhibition.forEach((specie) => {
        if (specie !== undefined) {
          newArray.push(specie);
        }
      });
      resultado[day].exhibition = newArray;
    }
  });

  return resultado;
}

function filterUndefinedDay(day, string) {
  const dia = day;

  dia[string].exhibition = dia[string].exhibition.filter((animal) => animal !== undefined);
  return dia;
}

function avail(day) {
  return `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
}

function getAni(day) {
  return data.species.map((x) => {
    if (x.availability.includes(day)) {
      return x.name;
    }
    return undefined;
  });
}

function noParams() {
  let resulted = {};
  days.forEach((day) => {
    if (day === 'Monday') {
      resulted[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      resulted[day] = {
        officeHour: avail(day), exhibition: getAni(day),
      };
    }
  });

  resulted = filterUndefinedAll(resulted);

  return resulted;
}

function withParams(string) {
  if (days.includes(string)) {
    if (string === 'Monday') {
      return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
    }

    const stringDay = { [string]: { officeHour: avail(string), exhibition: getAni(string) } };
    return filterUndefinedDay(stringDay, string);
  } if (animals.includes(string)) {
    return data.species.find((specie) => specie.name === string).availability;
  } return noParams();
}

function getSchedule(scheduleTarget) {
  // seu código aqui

  if (scheduleTarget === undefined) {
    return noParams();
  }
  return withParams(scheduleTarget);
}

console.log(getSchedule('Tuesday'));
module.exports = getSchedule;
