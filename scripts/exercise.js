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
  let rand = getRandomInt(10)
  getGIF((exe[rand].name).replace(" ","+"))
  let gifData = localStorage.getItem("gifdata")
  let gif = JSON.parse(gifData)
  //console.log(gif.data[0].url)
  document.getElementById("exercise").innerHTML = `Name:${exe[rand].name} <br> Type: ${exe[rand].type} <br> Instruction: ${exe[rand].instructions} <br> equipment: ${exe[rand].equipment} <br> difficulty: ${exe[rand].difficulty}`;
  document.getElementById("giphy-embed").src = gif.data[0].embed_url
  //console.log(gif.data[0].embed_url)
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

function getWeather(){
    let url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current_weather=true'
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function getGIF(searchKey){
    let url = 'http://api.giphy.com/v1/gifs/search'
    let api_key = 'MA7E8FdOXw3t2WTIbZzew06umA59Y8kT'
    let xhr = $.get(url+'?q='+searchKey+'&api_key='+api_key+'&limit=5')
    xhr.done(function(data) { localStorage.setItem("gifdata",JSON.stringify(data)); })
}
