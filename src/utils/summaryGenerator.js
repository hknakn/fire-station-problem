function displaySummary(dispatcher, startTime) {
  console.log("\n--- Summary ---");

  console.log("\n✅ Completed Calls:");
  dispatcher.completedCalls.forEach((call) => {
    console.log(`Call ${call.id}: (Priority: ${call.priority}) - Completed`);
  });

  console.log("\n⏳ Pending Calls:");
  if (dispatcher.pendingCalls.length > 0) {
    dispatcher.pendingCalls.forEach((call) => {
      console.log(`Call ${call.id}: (Priority: ${call.priority}) - Pending`);
    });
  } else {
    console.log("No pending calls.");
  }

  console.log("\n👨 Employee Status:");
  dispatcher.employees.forEach((emp) => {
    console.log(
      `${emp.name} (${emp.level}): ${
        emp.status === "free" ? "Available" : "Busy"
      }`
    );
  });

  const endTime = Date.now();
  const durationSeconds = (endTime - startTime) / 1000;
  console.log(`\n⏱️  Simulation duration: ${durationSeconds} seconds`);
}

module.exports = {
  displaySummary,
};
