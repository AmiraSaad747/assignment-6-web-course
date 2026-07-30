const students=require("../data/students");

function addstudent(name,grades){
 
const student={
    name,
    grades
};
students.push(student);
console.log(`${name} added successfully`);
}
module.exports=addstudent;