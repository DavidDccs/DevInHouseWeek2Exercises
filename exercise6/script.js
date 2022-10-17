var char = prompt(
  'What mathematical operation would you like to do? ("+" for plus, "-" for minus, "*" for multiplication and "/" for division )'
);
var number1 = parseFloat(prompt("Enter the first number"));
var number2 = parseFloat(prompt("Enter the second number"));

if (char == "+") {
  console.log(number1 + number2);
} else if (char == "-") {
  console.log(number1 - number2);
} else if (char == "*") {
  console.log(number1 * number2);
} else if (char == "/") {
  console.log(number1 / number2);
} else {
  alert("Insert a valid option!");
  window.location.reload();
}
