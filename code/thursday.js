var orderCount = 0;

function subTotal() {
  console.log("Subtotal" + someNumber * .75);
  console.log("value that I already know:" + orderCount);
}

function printAddSomething(someValue, otherValue) {
  console.log(someValue + otherValue);
}

printAddSomething(8,9);
printAddSomething(4,2);

var num1 = 1;
var num2 = 2;
var num3 = 3;
var num4 = 4;

printAddSomething(num1, num4);
printAddSomething(num1 + num2, num3);

//
//
//
// var day = 'Thursday',
//     thursday = 'thursday';
//
// // How many equals signs does it take to screw your code?
// // if (day = 'thursday') {
// //   console.log('Test 1: Well lookee there, it\'s ' + day);
// // }
// // discuss: evaluating expressions
// // discuss: truthy vs. falsy
//
// // The case of the failing "if" statement
// // if (day == 'Thursday') {
// //   console.log('Test 2: Lo and behold, it\'s ' + day);
// // }
// //
// // // Equals thrice, test once
// // if (day === 'Thursday') {
// //   console.log('Test 3: Huh. It\'s ' + day);
// // }
//
// // TODO: After commenting out the 3 conditionals above,
// //       uncomment this code and run it.
// if (day === 'Thursday') {
//   console.log('Is it Friday yet?');
// } else if (day === 'Saturday' || day === 'Sunday') {
//   console.log('Whew! It\'s the weekend!');
// } else {
//   console.log('Whistle while you work!');
// }
//
// // TODO: Add an "else if" block to check whether it's Saturday
// //       and console.log() a different statement for the weekend.
//
//
//
// // TODO: Modify the conditional for Saturday to check whether
// //       the day is Saturday OR Sunday.
//
//
//
// // TODO: Add an "else if" block to check whether it's Monday
// //       and console.log() a different statement for Monday.
//
//
//
// // TODO: Change the string that's assigned into the day
// //       variable and run the code several times.
//
//
//
// var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//
// // console.log('index 0: ' + days[0]);
// // console.log('index 1: ' + days[1]);
// // console.log('index 2: ' + days[2]);
// // console.log('index 3: ' + days[3]);
// // console.log('index 4: ' + days[4]);
// // console.log('index 6: ' + days[6]);
// // console.log('index 7: ' + days[7]);
// // console.log('index 20: ' + days[20]);
//
// // TODO: DRY it up!
// // for (var i = 0; i < days.length; i++) {
// //   console.log('index ' + i + ': ' + days[i]);
// // }
//
//
// // TODO: Replace the "7" in "i < 7" with the length of the array
//
//
// // TODO: On each iteration, use our randomly generated dayNumber
// //       to get a day from the days array, and console.log the
// //       name of the day.
// var max = 100,
//     randomNum,
//     result;
// for (var j = 0; j < max; j++) {
//   randomNum = Math.random();
//   // console.log('randomNum = ' + randomNum);
//   dayNumber = Math.floor(randomNum * days.length);
//   // console.log('dayNumber = ' + dayNumber);
//
//   console.log(days[dayNumber]);
// }
//
// // stretch goals:
// // find a way to make your day comparisons work for both 'Monday' and 'monday'
