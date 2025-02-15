const people = require("./people");

const groupPeopleByProfession = (people) => {
  const groups = people.reduce((accumulator, person) => {
    const profession = person.profession;
    if (!accumulator[profession]) {
      accumulator[profession] = [];
    }
    accumulator[profession].push(person.name);
    return accumulator;
  }, {});
  return groups;
};

console.log(groupPeopleByProfession(people));
