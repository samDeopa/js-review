const people = require("./people");

const getAverageSalary = (people) => {
  let salaries = people.reduce((accumulator, person) => {
    const profession = person.profession;
    if (!accumulator[profession]) {
      accumulator[profession] = [0, 0];
    }
    accumulator[profession][0] += person.salary;
    accumulator[profession][1]++;
    return accumulator;
  }, {});

  for (profession in salaries) {
    salaries[profession] = (
      salaries[profession][0] / salaries[profession][1]
    ).toFixed(2);
  }
  return salaries;
};

console.log(getAverageSalary(people));
