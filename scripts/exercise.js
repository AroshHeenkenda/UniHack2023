//test pop up
// Get the modal
var modal = document.getElementById("popUp");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  getExercises()
  getWeather()
  console.log(getWeather())
  let item = localStorage.getItem("exercise");
  let exe = JSON.parse(item)
  let rand = getRandomInt(10)
  document.getElementById("exercise").innerHTML = `Name:${exe[rand].name} <br> Type: ${exe[rand].type} <br> Instruction: ${exe[rand].instructions} <br> equipment: ${exe[rand].equipment} <br> difficulty: ${exe[rand].difficulty}`;
}

function getExercises(){
    var type = 'stretching'
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/exercises?type=' + type,
        headers: { 'X-Api-Key': 'wkWpjiH6OpEwflMBR1LRcA==wzg4Od4PUJUXUkZZ'},
        contentType: 'application/json',
        success: function(result) {
            localStorage.setItem("exercise",JSON.stringify(result));
            //console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getWeather()

