let today = new Date();
let yyyy = today.getFullYear();

let dSpring = new Date(yyyy, 8, 22);
let dSpringEnd = new Date(yyyy, 11, 21);

let dAutumn = new Date(yyyy, 2, 22);
let dAutumnEnd = new Date(yyyy, 5, 21);

let dWinter = new Date(yyyy, 5, 22);
let dWinterEnd = new Date(yyyy, 8, 21);

let dSummer = new Date(yyyy, 11, 22);
let dSummerEnd = new Date(yyyy, 2, 21);

if (today >= dAutumn && today <= dAutumnEnd) {
  alert("Today is " + today + " which means that it's Autumn");
} else if (today >= dSpring && today <= dSpringEnd) {
  alert("Today is " + today + " which means that it's Spring");
} else if (today >= dSummer && today <= dSummerEnd) {
  alert("Today is " + today + " which means that it's Summer");
} else {
  alert("Today is " + today + " which means that it's Winter");
}
