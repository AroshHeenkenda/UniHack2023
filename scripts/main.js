

//Timer Function
function formatTimeLeft(time) {

    const date_time = new Date(time * 1000).toISOString().slice(11,19);

    // The output in HH:MM:SS format
    return date_time;
}



function startTimer() {

    timerInterval = setInterval(() => {
    
    // The amount of time passed increments by one
    if (timeLeft > 0){
        timePassed = timePassed += 1;
        if (timePassed % (5)==0 && (TIME_LIMIT - timePassed != 0)){
            showNotification();
            new Audio("wrong-answer-129254.mp3").play();
            stretchTime();
            pauseTimer();
        }
        timeLeft = TIME_LIMIT - timePassed;

    } 
    else{
        console.log("It works")
        showNotificationFinish();
        new Audio("wrong-answer-129254.mp3").play()
        clearInterval(timerInterval);
        pauseTimer();
    }

    // The time left label is updated
    document.getElementById("timer-label").innerHTML = formatTimeLeft(timeLeft);
  }, 1000);

  if (timeLeft < 0){ clearInterval(timerInterval);
    pauseTimer();
    }
  return
}


function pauseTimer() {

    let pause_ref = document.getElementById("pause_button");

    if (PAUSED){
        PAUSED = false;
        startTimer();
        pause_ref.classList.remove("paused");
    }
    else{
        PAUSED = true;
        clearInterval(timerInterval);
        pause_ref.classList.add("paused");
    }
    console.log(PAUSED)
}


function resetTimer() {

    if (!PAUSED){
        pauseTimer();
    }

    let reset_ref = document.getElementById("resetTimerModal");
    reset_ref.classList.add("show");
    document.getElementById("hour").value = "00";
    document.getElementById("minute").value = "00";
    document.getElementById("second").value = "00";
}

function closeResetTimer(){

    let reset_ref = document.getElementById("resetTimerModal");
    reset_ref.classList.remove("show");
}

function confirmResetTimer(){

    let hour = parseInt(document.getElementById("hour").value);
    let minute = parseInt(document.getElementById("minute").value);
    let second = parseInt(document.getElementById("second").value);
    
    TIME_LIMIT = (hour*60*60) + (minute*60) + (second);
    timeLeft = TIME_LIMIT;
    timePassed = 0;
    console.log(`Time Limit: ${TIME_LIMIT}`)
    document.getElementById("timer-label").innerHTML = formatTimeLeft(TIME_LIMIT);
    closeResetTimer();
}

//On load
// Start with an initial value of 20 seconds
let TIME_LIMIT = 10;
// Initially, no time has passed, but this will count up
// and subtract from the TIME_LIMIT
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timer_ref = document.getElementById("timer");
let timerInterval = null;
let PAUSED = true;
document.getElementById("pause_button").classList.add("paused");

timer_ref.innerHTML = `
    <svg class="timer_svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="timer_circle">
            <circle class="timer_path-elapsed" cx="50" cy="50" r="45" />
            </g>

        </svg>
        <span id="timer-label" class="timer_label">
            ${formatTimeLeft(timeLeft)}
        </span>

    </div>
`;

function showNotification() {
    const notification = new Notification("New message from Mindful Minutes!", {
        body: "Hey! Time for a quick Stretch and posture check!",
        icon: "images/MindfulLogo.png",
        silent: true,
    });
};

function showNotificationFinish() {
    const notification = new Notification("New message from Mindful Minutes!", {
        body: "Great work sesh! Time to give the mind a break!",
        icon: "images/MindfulLogo.png",
        silent: true,
    });
};

if (Notification.permission === "granted"){
    //alert("Notifications has been enabled")
    //showNotification();
} else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
        console.log(permission)
        console.log("works 2")
        //showNotification();
    });
}

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        alert("Location Blocked, location services will not function")
    }
  }

function showPosition(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    console.log(lat)
    console.log(long)
}
  