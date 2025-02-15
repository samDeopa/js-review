const organisation = require("./organisation");

const getEmployeesOverBudget = (organisation) => {
  let overBudgetEmployee = [];
  organisation.divisions.forEach((division) => {
    division.departments.forEach((department) => {
      department.employees.forEach((employee) => {
        for (project of employee.projects) {
          if (project.budget > 150000) {
            overBudgetEmployee.push(employee.name);
            break;
          }
        }
      });
    });
  });
  overBudgetEmployee.sort();
  return overBudgetEmployee;
};

console.log(getEmployeesOverBudget(organisation));
console.log(getEmployeesOverBudget(organisation).length);
