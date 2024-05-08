var webSocketCarInputUrl = "ws:\/\/" + window.location.hostname + "/CarInput";      
      var websocketCarInput;
      
      function initCarInputWebSocket() 
      {
        websocketCarInput = new WebSocket(webSocketCarInputUrl);
        websocketCarInput.onopen    = function(event)
        {
          var speedButton = document.getElementById("Speed");
          sendButtonInput("Speed", speedButton.value);
          var panButton = document.getElementById("pan");
          sendButtonInput("pan", panButton.value);          
        };
        websocketCarInput.onclose   = function(event){setTimeout(initCarInputWebSocket, 2000);};
        websocketCarInput.onmessage = function(event){};        
      }
      
      function sendButtonInput(key, value) 
      {
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
      document.getElementById("mainTable").addEventListener("touchend", function(event){
        event.preventDefault()
      });  


      websocketCarInput.onmessage = function(event) {
        var data = event.data;
        // Parse the incoming data and update HTML elements
        updateSensorData(data);
      };
      
      function updateSensorData(data) {
        // Parse the data and update the relevant HTML elements
        // Example: Assuming the message is in the format "sensor1: value1"
        var [sensor, value] = data.split(':');
        var sensorElement = document.getElementById(sensor.trim());
        if (sensorElement) {
          sensorElement.innerHTML = value.trim();
        }
      }

      let currentTarget = 1;

function addMark() {
  const targetId = "target" + currentTarget;
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.style.backgroundColor = "#D71313";
    currentTarget = (currentTarget % 6) + 1; // Loop back to 1 after reaching 6
  }
}

function startChange() {
    const targetItems = document.querySelectorAll('.target-item');
    let index = 0;
    function changeItem() {
        if (index < targetItems.length) {
            targetItems[index].style.color = 'white'; // Change text color
            targetItems[index].style.backgroundColor = 'green';
            targetItems[index].textContent = 'Engaged'; // Change text content
            index++;
            setTimeout(changeItem, 5000); // 5 seconds delay
            }
        }

        changeItem();
        }





       
        
 


      function attemptLogin() {
        // Retrieve login credentials
        var id = document.querySelector('.id').value;
        var pass = document.querySelector('.pass').value;

        // Check if both ID and password are 'admin', if yes, grant access
        if (id.trim() === 'admin' && pass.trim() === 'admin') {
            // For simplicity, assume login is successful
            // Hide the login popup
            document.getElementById('loginPopup').style.display = 'none';
            // Show the rest of the content
            document.getElementById('content').style.display = 'block';
        } else if (id.trim() === '' && pass.trim() === '') {
            // Call the popup function if login credentials are not entered
            alert('Please Login to access this Function');
          } else {
            // Show an alert for incorrect ID or password
            alert('Incorrect ID or password. Please try again.');
            // Clear the input fields
            document.querySelector('.id').value = '';
            document.querySelector('.pass').value = '';
        }
    }





function changeModeColor() {
    // Get the .daba2 container
    var daba2 = document.querySelector('.daba2');

    // Toggle the 'active' class to change the color
    daba2.classList.toggle('active');
  
}

