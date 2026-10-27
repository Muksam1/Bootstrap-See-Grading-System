document.getElementById("getgrade").addEventListener("click",function(){
let marks = document.getElementById("marks").value;

if(marks < 30){
alert(`Your Grade : NG, CGPA : - , Remarks : NOT GRADED`);}

else if(marks >= 30 && grade < 40){
  alert(`Your Grade : D, CGPA : 1.6, Remarks : BASIC`);
}
else if(marks >= 40 && grade < 50){
  alert(`Your Grade : C, CGPA : 2.0, Remarks : ACCEPTABLE`);
}
else if(marks >= 50 && grade < 60){
  alert(`Your Grade : C+, CGPA : 2.4, Remarks : SATISFACTORY`);
}
else if(marks >= 60 && grade < 70){
  alert(`Your Grade : B, CGPA : 2.8, Remarks : GOOD`);
}
else if(marks >= 70 && grade < 80){
  alert(`Your Grade : B+, CGPA : 3.2, Remarks : VERY GOOD`);
}
else if(marks >= 80 && grade < 90){
  alert(`Your Grade : A, CGPA : 3.6, Remarks : EXCELLENT`);
}
else{
  alert(`Your Grade : A+, CGPA : 4.0, Remarks : OUTSTANDING`);
}
})
