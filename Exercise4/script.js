let number = 0;
let finalNumber = 0;


function callNumber(){
  number = parseFloat(prompt("Insert the desired number to add or '-1' to stop","0"));

}

function add(){
  while(number!=-1){
    callNumber();
    finalNumber = parseFloat(finalNumber + number);
  }
  alert("The addition of all those numbers before the '-1' is: " + finalNumber)
}
