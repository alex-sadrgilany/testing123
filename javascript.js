// DOM variables

var button1 = document.getElementById("btn-1");
var button2 = document.getElementById("btn-2");

var consoleFunction = function() {
  console.log("BIG RED BUTTON CLICKED");
}

var consoleFunction2 = function() {
  console.log("BIG PURPLE BUTTON CLICKED");
}

button1.addEventListener("click", consoleFunction);
button2.addEventListener("click", consoleFunction2);