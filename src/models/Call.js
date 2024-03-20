class Call {
  constructor(id, priority) {
    this.id = id;
    this.priority = priority;
    this.status = "pending";
  }

  setStatus(status) {
    this.status = status;
  }
}

module.exports = Call;
