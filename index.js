const { loadEmployeesFromFile } = require("./src/utils/employeeLoader");
const { generateCalls } = require("./src/utils/callGenerator");
const Dispatcher = require("./src/services/dispatcher");

console.log("🚒 Initializing Fire Station Dispatch System...");

const employees = loadEmployeesFromFile();
const dispatcher = new Dispatcher(employees);

generateCalls(dispatcher);
