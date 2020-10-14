
// script for getting the slider value and outputing it
var slider = document.getElementById("myRange");
var output = document.getElementById("slider-value");
output.innerHTML = slider.value;


slider.oninput = function() {
output.innerHTML = this.value;
}

// test script for getting the answer to change based on slider
var slider = document.getElementById("myRange"); // variable slider takes value from document with id myRange
var output = document.getElementById("answer-value");
output.innerHTML = slider.value;


slider.oninput = function() {
output.innerHTML = this.value;
}

// slider reactions test code
function readTemperature(temp) {
  if(temp <= 15) {
  return("Cold");
} else if(temp > 25) {
  return("Hot");
} else {
return("Moderate");
}
}
