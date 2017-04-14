// Document Object Model

// getElemntById, getElementsByTagName, getAttribute, setAttribute

// Document Object Model is teh representation of a document as a tree

var purchases = document.getElementById("purchases");   // Returns an object
// console.log(purchases);
// console.log(typeof "hi");
// console.log(typeof 22);
// console.log(typeof false);
// console.log(typeof [1,2,3]); // string number function boolean object
// Array is an object
// var lists = document.getElementsByTagName("li");        // Returns an array (object)
// console.log(lists.length);
//
//

// for (var idx = 0; idx < lists.length; idx++) {
//   console.log(lists[idx]);
//   console.log(typeof lists[idx]);
// }
// //TODO: Why do we have to put it at the bottom of html file?
// console.log(document.getElementsByTagName("*").length);
// var items = purchases.getElementsByTagName("*");
// console.log(items.length);

// var paras = document.getElementsByTagName("p");
// for (var i = 0; i < paras.length; i++) {
//   //console.log(paras[i].getAttribute("title"));
//   var title_text = paras[i].getAttribute("title");
//   if (title_text) {
//     console.log(title_text)
//   }
// }
var shopping = document.getElementById("purchases");
shopping.setAttribute("title", "a list of goods");
console.log(shopping.getAttribute("title"));
console.log(typeof False);
