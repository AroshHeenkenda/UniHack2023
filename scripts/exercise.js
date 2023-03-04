//test pop up
/*-------exercise suggestion pop up-------*/ 
// Get the modal
var modal = document.getElementById("popUp");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
//Get the button that close the modal
var con = document.getElementById("closeStretch")
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  getExercises()
  let item = localStorage.getItem("exercise");
  let exe = JSON.parse(item)
  //getWeather()
  //console.log(gif.data[0].url)
  let rand = getRandomInt(8)
  console.log(exe[rand])
  document.getElementById("name").innerHTML = exe[rand].name
  document.getElementById("description").innerHTML = exe[rand].description
  document.getElementById("pic").src = exe[rand].image
}
// When the user clicks on continue button, close the modal
con.onclick =function closePopUp() {
    modal.style.display = "none";
}

//fetch stretch exercise from database
function getExercises(dbName = 'scripts/stretchingPosture.json'){
  fetch(dbName)
  .then(response => response.json())
  .then(data => {
    localStorage.setItem("exercise",JSON.stringify(data));
  })
  .catch(error => {
    console.error('Error fetching JSON file:', error);
  });
}

//random number from 0-8 to randomly sugeest stretch posture
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//fetch weather detail from open meteo api
function getWeather(){
    let url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,precipitation,rain&daily=precipitation_sum,precipitation_probability_max&current_weather=true&timezone=Australia%2FSydney'
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

/*-----------Weather pop up--------------------*/
//Get button that opens the weather pop up
var weatherBtn = document.getElementById("weatherBtn");
// Get the modal
var weatherModal = document.getElementById("weatherPopUp");
// When the user clicks on the button, open the modal
weatherBtn.onclick = function() {
  weatherModal.style.display = "block";
  //function to create weather widge
  (function(d, s, id) {
    if (d.getElementById(id)) {
        if (window.__TOMORROW__) {
            window.__TOMORROW__.renderWidget();
        }
        return;
    }
    const fjs = d.getElementsByTagName(s)[0];
    const js = d.createElement(s);
    js.id = id;
    js.src = "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";

    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'tomorrow-sdk');
}
