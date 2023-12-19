// Your code here

const { Employee } = require('./employee');

const employee = new Employee('John Wick', 'Dog Lover');

// const employeeName  = employee.sayName;
const employeeName = employee.sayName.bind(employee);

global.setTimeout(employeeName, 2000);

// const employeeOccupation = employee.sayOccupation;
const employeeOccupation = employee.sayOccupation.bind(employee);

global.setTimeout(employeeOccupation, 3000);
