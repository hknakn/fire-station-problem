class Employee {
  constructor(id, name, level) {
    this.id = id;
    this.name = name;
    this.level = level;
    this.status = "free";
  }

  setStatus(status) {
    this.status = status;
  }
}

module.exports = Employee;
