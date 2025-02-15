const people = require("./people");

const getYoungestAndOldest = (people) => {
  const youngAndOld = people.reduce(
    (accumulator, person) => {
      if (person.age < accumulator.youngest.age) {
        accumulator.youngest.name = person.name;
        accumulator.youngest.age = person.age;
      }
      if (person.age > accumulator.oldest.age) {
        accumulator.oldest.name = person.name;
        accumulator.oldest.age = person.age;
      }
      return accumulator;
    },
    {
      youngest: { name: "", age: 100000 },
      oldest: { name: "", age: 0 },
    }
  );

  return youngAndOld;
};
console.log(getYoungestAndOldest(people));
