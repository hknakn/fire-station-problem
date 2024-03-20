# Fire Station Dispatch System

## Overview

The Fire Station effectively simulates the handling of emergency calls, demonstrating efficient management of emergency situations through prioritized call dispatching.

## Tech Stack

- JavaScript (Node.js)
- JSON
- npm

## Features

- Automatic generation of emergency calls at regular intervals.
- Priority-based dispatching of calls to available employees.
- Simulation of employee status changes upon call allocation and completion.
- Summary generation at the end of the simulation, detailing completed and pending calls, and employee statuses.

# Folder Structure

- **index.js**: The main entry point of the application, responsible for initializing the system and starting the call generation process.
- **src**: Contains the source code for the application.
  - **constants**: Holds constants used throughout the application, such as call generation intervals and timeout durations.
  - **data**: Stores the data files required for the application, such as the list of employees.
  - **models**: Defines the data models used in the application, including the `Call` and `Employee` classes.
  - **services**: Contains the core logic of the application, including the `Dispatcher` class responsible for call dispatching.
  - **utils**: Houses utility functions used in the application, such as loading employees from a file and generating call summaries.

# How It Works

1. **Initialization**: The system is initialized by loading employee data from the `employees.json` file and creating a `Dispatcher` instance.
2. **Call Generation**: Calls are generated at regular intervals using the `generateCalls` function. Each call is assigned a random priority (low or high) and dispatched to available employees based on their skill levels.
3. **Dispatching Process**: The `Dispatcher` class handles the dispatching logic, ensuring that calls are allocated to the most appropriate available employee. Calls may be put on hold if no suitable employee is available immediately.
4. **Summary Generation**: After the simulation ends, a summary is generated using the `displaySummary` function. This summary includes details of completed and pending calls, as well as the status of each employee.
5. **Simulation Duration**: The total simulation duration is tracked to ensure that calls are not dispatched or processed after the specified simulation time elapses.

## Customization

Users can customize the simulation by adjusting the time constants in the `constants/index.js` file and modifying the `employees.json` file to update employee data.

## Installation

1. Install the dependencies with `npm install` command.
2. Run the app with `node index.js` command.

## Example Output

```
🚒 Initializing Fire Station Dispatch System...

⏰ Generating call 1 (low Priority)...
📞 Call 1 (Priority: low) dispatched to "junior" John Doe.
🔼 Call 1 has been upgraded to high priority!
📞 Call 1 (Priority: high) dispatched to "manager" David Johnson.

⏰ Generating call 2 (high Priority)...
📞 Call 2 (Priority: high) dispatched to "manager" Robert Anderson.

⏰ Generating call 3 (high Priority)...
📞 Call 3 (Priority: high) dispatched to "director" Emily Brown.

⏰ Generating call 4 (low Priority)...
📞 Call 4 (Priority: low) dispatched to "junior" Michael Wilson.

⏰ Generating call 5 (high Priority)...
📞 Call 5 (Priority: high) dispatched to "director" Sophia White.

⏰ Generating call 6 (high Priority)...
🚫 All employees are currently busy. Call 6 placed on hold.

💼 Employee "John Doe" is now available.
🚫 All employees are currently busy. Call 6 placed on hold.

💼 Employee "David Johnson" is now available.
📞 Call 6 (Priority: high) dispatched to "manager" David Johnson.

--- Summary ---

✅ Completed Calls:
Call 1: (Priority: high) - Completed
Call 2: (Priority: high) - Completed
Call 3: (Priority: high) - Completed
Call 4: (Priority: low) - Completed
Call 5: (Priority: high) - Completed
Call 6: (Priority: high) - Completed

⏳ Pending Calls:
No pending calls.

👨 Employee Status:
John Doe (junior): Available
Jane Smith (senior): Available
David Johnson (manager): Busy
Emily Brown (director): Busy
Michael Wilson (junior): Busy
Amanda Lee (senior): Available
Robert Anderson (manager): Busy
Sophia White (director): Busy

⏱️  Simulation duration: 20.004 seconds
```
