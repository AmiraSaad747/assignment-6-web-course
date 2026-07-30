const addStudent = require("./module/addstudent");
const liststudents = require("./module/listStudents");
const filterPassed = require("./module/filterPassed");

console.log("Adding Students...\n");

addStudent("Aliaa", [90, 85, 95]);
addStudent("Ali", [60, 70, 55]);
addStudent("Sara", [40, 50, 45]);
addStudent("Omar", [80, 75, 90]);

console.log("\n========================");

liststudents();

console.log("\n========================");

filterPassed();