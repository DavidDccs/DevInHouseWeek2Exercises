let number = 0;
let finalNumber = 0;
let odd = 0;
let even = 0;

function callNumber(){
  number = parseFloat(prompt("Insert the desired positive number to see how many odd and even numbers are from 0 to it","0"));
  callOddOrEven();
  alert("The amount of ODD numbers from 0 to " + number + " are " + odd + " and the amout of EVEN are " + even )
}

function callOddOrEven(){
if(number>0){
for(let i = number; i>0; i--){
  if(i%2==0){even++}
  else{odd++}
}}}

callNumber();