const people = require("./people");

const getYoungestAndOldest = (people) => {
  const youngAndOld = people.reduce((accumulator, person) => {
    const profession = person.profession;
    if (!accumulator[profession]) {
      accumulator[profession] = {
        youngest: { name: "", age: 100000 },
        oldest: { name: "", age: 0 },
      };
    }
    if (person.age < accumulator[profession].youngest.age) {
      accumulator[profession].youngest.name = person.name;
      accumulator[profession].youngest.age = person.age;
    }
    if (person.age > accumulator[profession].oldest.age) {
      accumulator[profession].oldest.name = person.name;
      accumulator[profession].oldest.age = person.age;
    }
    return accumulator;
  }, {});

  return youngAndOld;
};
console.log(getYoungestAndOldest(people));
