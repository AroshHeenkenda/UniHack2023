//test pop up
/*-------exercise suggestion pop up-------*/ 
// Get the modal
var modal = document.getElementById("popUp");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
//Get the button that close the modal
var con = document.getElementById("closeStretch")
// When the user clicks on the button, open the modal
function stretchTime() {
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
    pauseTimer();
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


/*-----------Weather pop up--------------------*/
//Get button that opens the weather pop up
var weatherBtn = document.getElementById("weatherBtn");
// Get the modal
var weatherModal = document.getElementById("weatherPopUp");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
function displayEnd() {
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
  getTrail('leisure')
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  weatherModal.style.display = "none";
}
//get weather data from tomorrow
function getWeather(lat, lon){
  var apiKey = "TbYKTzaxNM109CxIMPZFkyiLMrdoysMY"
  //get weather in data
  const options = {method: 'GET', headers: {accept: 'application/json'}};
  var api = 'https://api.tomorrow.io/v4/weather/realtime?location='+lat+','+lon+ '&apikey='+ apiKey
  fetch(api, options)
    .then(response => response.json())
    .then(response => 
        console.log(response))
    .catch(err => console.error(err));
}

let lat1 = localStorage.getItem("lat");
let lat = JSON.parse(lat1)
let lon1 = localStorage.getItem("long");
let lon = JSON.parse(lon1)
//getWeather(lat, lon)
function getTrail(){
  var requestOptions = {
    method: 'GET',
  };
  var apiKey = "70010d7ede7f41b594751cd1c50ebdd7"
  var api = 'https://api.geoapify.com/v2/places?categories=leisure&filter=circle:'+lon+','+lat+',5000&bias=proximity:'+lon+','+lat+'&limit=20&apiKey='+apiKey
  console.log(api)
  let rand = getRandomInt(20)
  fetch(api)
  .then(response => response.json())
  .then(result =>

    {
      console.log(result)
      document.getElementById("mapApi").src = 'https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=600&height=400&center=lonlat:'+result.features[rand].properties.lon+','+result.features[rand].properties.lat+'&zoom=14&marker=lonlat:'+result.features[rand].properties.lon+','+result.features[rand].properties.lat+';color:%23ff0000;size:medium&apiKey='+apiKey,
      document.getElementById("placeSuggestion").innerHTML = result.features[rand].properties.address_line1+result.features[rand].properties.address_line2;

      let refText = `Here's some places to go and get active! <br>`;


      
      for (let i=0; i < result.features.length; i++){

        if (result.features[i].properties["name"]){
          refText += `- ${result.features[i].properties["name"]} <br>`;
        }

      }
      document.getElementById("placeList").innerHTML = refText;
      
    }
    
    )
  .catch(error => console.log('error', error));
}

