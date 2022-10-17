var number1 = parseFloat(prompt("Enter the first number for the AP"));
var number2 = parseFloat(
  prompt("Enter the value for the constant to be added")
);

console.log(number1);
for (var i = 0; i < 9; i++) {
  number1 = number1 + number2;
  console.log(number1);
}
