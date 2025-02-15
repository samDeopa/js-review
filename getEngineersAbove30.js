const people = require("./people");

let getEngineersAbove30 = (people) => {
  const engineers = people.reduce((accumulator, person) => {
    if (person.profession == "Engineer" && person.age > 30) {
      accumulator.push(person.name);
    }
    return accumulator;
  }, []);
  return engineers;
};

console.log(getEngineersAbove30(people));
