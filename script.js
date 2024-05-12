let currentTarget = 1;
let hittarget = 1;
let mapModeActive = false; // Flag to indicate if MapMode is active
var webSocketCarInputUrl = "ws://" + window.location.hostname + "/CarInput";
var websocketCarInput;

//Karan

function initCarInputWebSocket() {
  websocketCarInput = new WebSocket(webSocketCarInputUrl);
  websocketCarInput.onopen = function (event) {
    var speedButton = document.getElementById("Speed");
    sendButtonInput("Speed", speedButton.value);
    var panButton = document.getElementById("pan");
    sendButtonInput("pan", panButton.value);
  };
  websocketCarInput.onclose = function (event) {
    setTimeout(initCarInputWebSocket, 2000);
  };
  //Communication through esp
  websocketCarInput.onmessage = function (event) {
    var data = event.data;
    console.log("Received message: " + data);
    if (data == "target_hit") {
      //changecolour function
      targethit();
    }

    var textarea = document.getElementById("esp-data-textarea");
    textarea.value += data + "\n";
    textarea.scrollTop = textarea.scrollHeight;
  };
  //Communication through esp
}

function sendButtonInput(key, value) {
  var data = key + "," + value;
  websocketCarInput.send(data);
}

function changeIP() {
  var ip = document.getElementById("ipInput").value;
  var streamFrame = document.getElementById("stream");
  streamFrame.src = "http://" + ip + "/";
}

function changeIP() {
  var ip = document.getElementById("ipInput").value;
  var streamFrame = document.getElementById("stream");
  streamFrame.src = "http://" + ip + "/";
}

window.onload = initCarInputWebSocket;
document
  .getElementById("mainTable")
  .addEventListener("touchend", function (event) {
    event.preventDefault();
  });

//Karan

function changeModeColor() {
  // Get the .daba2 container
  var daba2 = document.querySelector(".daba2");

  // Toggle the 'active' class to change the color
  daba2.classList.toggle("active");

  mapModeActive = !mapModeActive; // Toggle the mapModeActive flag
}

function changeModeColor1() {
  // Get the .daba3 container
  var daba3 = document.querySelector(".daba3");

  // Toggle the 'active' class to change the color
  daba3.classList.toggle("active");
  document.getElementById("esp-data-textarea").value =
    "Guard mode is activated";
}

function addMark() {
  // Check if MapMode is active
  if (mapModeActive) {
      const targetId = "target" + currentTarget;
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
          targetElement.style.backgroundColor = "#D71313";
          targetElement.textContent = "Lock";
          currentTarget = (currentTarget % 6) + 1; // Loop back to 1 after reaching 6
      }
  } else {
      // Display a message or handle the scenario when MapMode is not active
      alert("MapMode is not active. Cannot add mark.");
  }
}


function targethit() {
  const targetId = "target" + hittarget;
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.style.backgroundColor = "green";
    targetElement.textContent = "Hit";
    hittarget = (hittarget % 6) + 1; // Loop back to 1 after reaching 6
  }
}

function attemptLogin() {
  // Retrieve login credentials
  var id = document.querySelector(".id").value;
  var pass = document.querySelector(".pass").value;

  // Check if both ID and password are 'admin', if yes, grant access
  if (id.trim() === "admin" && pass.trim() === "admin") {
    // For simplicity, assume login is successful
    // Hide the login popup
    document.getElementById("loginPopup").style.display = "none";
    // Show the rest of the content
    document.getElementById("content").style.display = "block";
  } else if (id.trim() === "" && pass.trim() === "") {
    // Call the popup function if login credentials are not entered
    alert("Please Login to access this Function");
  } else {
    // Show an alert for incorrect ID or password
    alert("Incorrect ID or password. Please try again.");
    // Clear the input fields
    document.querySelector(".id").value = "";
    document.querySelector(".pass").value = "";
  }
}
