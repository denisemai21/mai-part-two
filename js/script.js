function myFunction() {
var eventType = prompt("Enter event type");
var resultOne;
if(eventType === "casual"){
  resultOne = "something comfy";
}
else if(eventType === "semi-formal"){
  resultOne = "a polo";
}
else if(eventType === "formal") {
  resultOne = "a suit";
}

var tempFahr = prompt("Enter temperature");
var resultTwo;
if(tempFahr <= 54){
  resultTwo = "a coat";
}
else if(tempFahr >=54 && tempFahr <= 70){
  resultTwo = "a jacket";
}
else if(tempFahr > 70){
  resultTwo = "no jacket";
}
  document.getElementById("demo").innerHTML = 'Since it is ' + tempFahr + ' degrees ' + ' and you are going to a ' + eventType + ' event, you should wear ' + resultOne + ' and ' + resultTwo + '.';
}
