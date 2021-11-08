var localButton = document.getElementById("local-button");
var sessionButton = document.getElementById("session-button");

var localClicks = document.getElementById("local-clicks");
var sessionClicks = document.getElementById("session-clicks");

var localCounter = 0,
  sessionCounter = 0;

// sessionStorage.clear();
// localStorage.clear();

if (!localStorage.getItem("localCounter")) {
  localStorage.setItem("localCounter", localCounter);
} else {
  localCounter = parseInt(localStorage.getItem("localCounter"));
}

if (!sessionStorage.getItem("sessionCounter")) {
  sessionStorage.setItem("sessionCounter", sessionCounter);
} else {
  sessionCounter = parseInt(sessionStorage.getItem("sessionCounter"));
}

console.log("localCounter: " + localStorage.getItem("localCounter"));
console.log("sessionCounter: " + sessionStorage.getItem("sessionCounter"));

localClicks.innerText = localStorage.getItem("localCounter");
sessionClicks.innerText = sessionStorage.getItem("sessionCounter");

localButton.addEventListener("click", () => {
  localCounter = localCounter + 1;
  localStorage.setItem("localCounter", localCounter);
  localClicks.innerText = localStorage.getItem("localCounter");
});

sessionButton.addEventListener("click", () => {
  sessionCounter = sessionCounter + 1;
  sessionStorage.setItem("sessionCounter", sessionCounter);
  sessionClicks.innerText = sessionStorage.getItem("sessionCounter");
});
