// Update the src attribute
function showPic(whichpic) {
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src",source);

  var title_text = whichpic.getAttribute("title");
  var description = document.getElementById("description");
  //console.log(description.childNodes[0].nodeValue);
  description.firstChild.nodeValue = title_text;
  // text swapping
}
// to change the value of an input element
// use the value method
// element.value = "the new value";
// element.setAttribute("value", "the new value");
// placeholder.src = source;

//element.childNodes

function countBodyChildren(){
  var body_element = document.getElementsByTagName("body")[0];
  console.log(body_element.childNodes.length);
  console.log(body_element.nodeType);
}
// Element nodeType value of 1, Attribute 2, Text 3
window.onload = countBodyChildren;
