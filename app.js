let reaction = document.getElementById("reaction");
const memory = document.getElementById("memory");
const verbal = document.getElementById("verbal");
const visual = document.getElementById("visual");

// Function to fetch and process the JSON file
function fetchJSONFile(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        callback(xhr.responseText);
      }
    };
    xhr.send(null);
  }

  // Usage
  fetchJSONFile("data.json", function (response) {
    let data = JSON.parse(response);
    // Process the JSON data
    reaction.innerHTML = data[0].score;
    memory.innerHTML = data[1].score;
    verbal.innerHTML = data[2].score;
    visual.innerHTML = data[3].score;

  });

