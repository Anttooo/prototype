
// script for getting the slider value and outputing it
// var slider = document.getElementById("myRange");
// var output = document.getElementById("slider-value");
// output.innerHTML = slider.value;


// slider.oninput = function() {
// output.innerHTML = this.value;
// }

// test script for getting the answer to change based on slider
var slider = document.getElementById("myRange"); // variable slider takes value from document with id myRange
var output = document.getElementById("answer-value"); //the output of the function will be output to element with id "answer-value"
output.innerHTML = "move the slider"; //taking the variable "output"


slider.oninput = function() {
if(slider.value <= 20) {
  output.innerHTML = "I strongly disagree";
}
else if(slider.value <=40) {
  output.innerHTML = "I disagree";
}
else if(slider.value <=60) {
  output.innerHTML = "I neither disagree or agree";
}
else if(slider.value <=80) {
  output.innerHTML = "I somewhat agree";
}
else{
  output.innerHTML = "I fully agree";
}
}
// slider reactions test code
// function readValue(slider.value) {
//   if(slider.value <= 15) {
//   alert("No");
// }

// else if(slider.value > 25) {
//   alert("Hot");
// } else {
//  alert("Moderate");
// }
// }
