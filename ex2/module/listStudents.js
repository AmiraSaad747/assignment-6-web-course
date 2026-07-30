const students=require("../data/students");
const calculateaverage=require("../module/calculateAverage");
function listStudent(){

    if (students.length === 0) {
        console.log("No students found.");
        return;
    }

    console.log("\nStudent List:");

    students.forEach(student => {

        console.log(
            `Name: ${student.name}`
        );

        console.log(
            `Grades: ${student.grades.join(", ")}`
        );

        console.log(
            `Average: ${calculateaverage(student.grades).toFixed(2)}`
        );

        console.log("----------------");
    });
}
module.exports=listStudent;