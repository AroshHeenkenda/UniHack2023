//test pop up
// Get the modal
var modal = document.getElementById("popUp");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  getExercises()
  let item = localStorage.getItem("exercise");
  let exe = JSON.parse(item)
  document.getElementById("exercise").innerHTML = `Name:${exe[0].name} <br> Type: ${exe[0].type} <br> Instruction: ${exe[0].instructions} <br> equipment: ${exe[0].equipment} <br> difficulty: ${exe[0].difficulty}`;
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

