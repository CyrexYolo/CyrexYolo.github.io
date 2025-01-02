var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/taiga.png") {
    myImage.setAttribute("src", "images/taiga2.png");
  } else {
    myImage.setAttribute("src", "images/taiga.png");
  }
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Taiga is cool, " + myName;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Taiga is cool, " + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };
      