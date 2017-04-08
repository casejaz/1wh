var height = "about 5'10\" tall";
//alert(height);

var lennon = Array("John",1940, false);
var beatles = Array();
beatles[0] = lennon;

if (1 > 2) {
  console.log("The world has gone mad!");
} else {
  console.log("All is well with the world");
}

var num = 9;
if (! (num > 10 || num < 5)) {
  console.log("The number IS in the right range.");
}

var count = 1;
// while (count < 11) {
//   console.log(count);
//   count++;
// }

// do {
//   console.log(count);
//   count++;
// } while (count < 11);

do {
  count++;
  console.log(count);
} while (count < 2);

function shout() {
  var beatles = ["John", "Paul", "George", "Ringo"];
  for (var count = 0; count < beatles.length; count++) {
    console.log(beatles[count]);
  }
}

// function multiply(num1, num2) {
//   var total = num1 * num2;
//   return total;
// }
//
// //shout()
//
// var my_lucky_number = multiply(1,29);
// console.log("my lucky number is " + my_lucky_number);

// function square (num) {
//   // distinguish the scope
//   var total = num * num;
//   return total;
// }
// var total = 50;
// var number = square(20);
// console.log(total);

var current_date = new Date();
var today = current_date.getDay();
var time = current_date.getHours();
var num = 29.999;
var rounded_num = Math.round(num);
// console.log(today, time, rounded_num);
console.log(today);
console.log(current_date);
