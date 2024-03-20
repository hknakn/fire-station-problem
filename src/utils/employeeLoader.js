const fs = require("fs");
const Employee = require("../models/employee");

function loadEmployeesFromFile() {
  const employeesData = JSON.parse(
    fs.readFileSync(require.resolve("../data/employees.json"))
  );
  return employeesData.map(
    ({ id, name, level }) => new Employee(id, name, level)
  );
}

module.exports = {
  loadEmployeesFromFile,
};
