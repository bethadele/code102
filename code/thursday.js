var day = 'Thursday',
    thursday = 'thursday';

// How many equals signs does it take to muck up your code?
if (day = 'thursday') {
  console.log('Test 1: Well lookee there, it\'s ' + day);
}

// The case of the failing "if" statement
if (day == 'Thursday') {
  console.log('Test 2: Lo and behold, it\'s ' + day);
}

// Equals thrice, test once
if (day === 'Thursday') {
  console.log('Test 3: Huh. It\'s ' + day);
}

// TODO: After commenting out the 3 conditionals above,
//       uncomment this code and run it.
// if (day === 'Thursday') {
//   console.log('Is it Friday yet?');
// } else {
//   console.log('Whistle while you work!')
// }

// TODO: Add an "else if" block to check whether it's Saturday
//       and console.log() a different statement for the weekend.



// TODO: Modify the conditional for Saturday to check whether
//       the day is Saturday OR Sunday.



// TODO: Add an "else if" block to check whether it's Monday
//       and console.log() a different statement for Monday.



// TODO: Change the string that's assigned into the day
//       variable and run the code several times.



var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// console.log('index 0: ' + days[0]);
// console.log('index 1: ' + days[1]);
// console.log('index 2: ' + days[2]);
// console.log('index 6: ' + days[6]);
// console.log('index 7: ' + days[7]);
// console.log('index 20: ' + days[20]);

// TODO: DRY it up!
// for (var i = 0; i < 7; i++) {
//   console.log('index ' + i + ': ' + days[i]);
// }


// TODO: Replace the "7" in "i < 7" with the length of the array


// TODO: On each iteration, use our randomly generated dayNumber
//       to get a day from the days array, and console.log the
//       name of the day.
// var max = 100,
//     result;
// for (var j = 0; j < max; j++) {
//   dayNumber = Math.floor(Math.random() * days.length);
// }
