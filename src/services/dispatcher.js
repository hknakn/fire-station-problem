const { DISPATCH_TIMEOUT, TOTAL_SIMULATION_TIME } = require("../constants");

class Dispatcher {
  constructor(employees) {
    this.employees = employees;
    // The order of levels within each priority is crucial for the dispatching logic.
    this.priorityLevels = {
      high: ["manager", "director"],
      low: ["junior", "senior", "manager"],
    };
    this.pendingCalls = [];
    this.completedCalls = [];
  }

  dispatchCall(call) {
    const levels = this.priorityLevels[call.priority];
    let availableEmployee = null;

    for (const level of levels) {
      availableEmployee = this.employees.find(
        (emp) => emp.level === level && emp.status === "free"
      );
      if (availableEmployee) break;
    }

    if (availableEmployee) {
      this.handleDispatch(availableEmployee, call);
    } else {
      this.handleCallOnHold(call);
    }
  }

  handleDispatch(employee, call) {
    console.log(
      `📞 Call ${call.id} (Priority: ${call.priority}) dispatched to "${employee.level}" ${employee.name}.`
    );
    employee.setStatus("busy");

    if (!this.completedCalls.find((c) => c.id === call.id)) {
      this.completedCalls.push(call);
    }

    const dispatchTimeout = setTimeout(() => {
      console.log(`\n💼 Employee "${employee.name}" is now available.`);
      employee.setStatus("free");
      this.handlePendingCalls();
    }, DISPATCH_TIMEOUT);

    setTimeout(() => {
      clearInterval(dispatchTimeout);
    }, TOTAL_SIMULATION_TIME);

    call.setStatus("dispatched");
  }

  handleCallOnHold(call) {
    if (!this.pendingCalls.find((c) => c.id === call.id)) {
      console.log(
        `🚫 All employees are currently busy. Call ${call.id} placed on hold.`
      );
      this.pendingCalls.push(call);
    }
  }

  handlePendingCalls() {
    if (this.pendingCalls.length > 0) {
      const pendingCall = this.pendingCalls.shift();
      this.dispatchCall(pendingCall);
    }
  }
}

module.exports = Dispatcher;
