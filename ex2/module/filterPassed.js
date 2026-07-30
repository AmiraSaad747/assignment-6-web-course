const students=require("../data/students");
const calculateaverage=require("../module/calculateAverage");
function filterpassed(){

    const passedstudent=students.filter(student=>{
     return calculateaverage(student.grades)>=60;
    });
    console.log("\n passed student");

    if(passedstudent.length===0){
        console.log("student not passed");
        return;
    }
    passedstudent.forEach(student => {
        console.log(
            `${student.name} - Average: ${calculateaverage(student.grades).toFixed(2)}`
        );
    });
}

module.exports=filterpassed;