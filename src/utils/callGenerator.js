const Call = require("../models/call");
const {
  CALL_GENERATION_INTERVAL,
  PENDING_CALLS_INTERVAL,
  TOTAL_SIMULATION_TIME,
} = require("../constants");
const { displaySummary } = require("./summaryGenerator");

function generateCalls(dispatcher) {
  let callId = 1;
  const startTime = Date.now();

  const callInterval = setInterval(() => {
    const originalPriority = Math.random() < 0.5 ? "low" : "high";
    const call = new Call(callId++, originalPriority);

    console.log(
      `\n⏰ Generating call ${call.id} (${call.priority} Priority)...`
    );

    dispatcher.dispatchCall(call);

    // Randomly changing the priority of low priority calls to high priority
    if (call.priority === "low" && Math.random() < 0.5) {
      console.log(`🔼 Call ${call.id} has been upgraded to high priority!`);
      call.priority = "high";
      dispatcher.dispatchCall(call);
    }
  }, CALL_GENERATION_INTERVAL);

  const pendingCallsInterval = setInterval(() => {
    dispatcher.handlePendingCalls();
  }, PENDING_CALLS_INTERVAL);

  setTimeout(() => {
    clearInterval(callInterval);
    clearInterval(pendingCallsInterval);

    displaySummary(dispatcher, startTime);
  }, TOTAL_SIMULATION_TIME);
}

module.exports = {
  generateCalls,
};
