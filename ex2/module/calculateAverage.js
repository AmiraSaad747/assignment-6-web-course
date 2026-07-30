function calculateaverage(grades){

    const total=grades.reduce((sum,grades)=>{
        return sum+grades;
    },0);
    return total/grades.length;

}
module.exports=calculateaverage;