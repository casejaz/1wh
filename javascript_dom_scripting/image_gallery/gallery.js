// Update the src attribute
console.log("show!");
function showPic(whichpic) {
  var source = whichpic.getAttribute("href");
  console.log(source);
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src",source);
  console.log("hi");

}


// to change the value of an input element
// use the value method
// element.value = "the new value";
// element.setAttribute("value", "the new value");
// placeholder.src = source;
