

// var a = "Hello World!";
//
// function b() {
//   console.log('Called b!');
// }
//
// b();
// console.log(a);
//
// var c = "Hello, World!";
// console.log(c);
//
// if (c === undefined) {
//   console.log('a is undefined!');
// }
// else {
//   console.log('a is defined!');
// }

// function a() {
//   b();
//   var c;
// }
// function b() {
//   var d;
// }
// a();
// var d;

// function b() {
//   var myVar;
//   console.log(myVar);
// }
// function a() {
//   var myVar = 2;
//   console.log(myVar);
//   b();
// }
// var myVar = 1;
// console.log(myVar);
// a();
// console.log(myVar);

function b() {
  console.log(myVar);
}
function a() {
  var myVar = 2;
  b();
}
var myVar = 1;
a();
