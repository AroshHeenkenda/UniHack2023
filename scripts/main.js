

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
        timeLeft = TIME_LIMIT - timePassed;
    }

    // The time left label is updated
    document.getElementById("timer-label").innerHTML = formatTimeLeft(timeLeft);
  }, 1000);

  if (timeLeft < 0){ clearInterval(timerInterval);}
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
}


function resetTimer() {

    let reset_ref = document.getElementById("resetTimerModal");
    reset_ref.classList.add("show");
    
}

function closeResetTimer(){

    let reset_ref = document.getElementById("resetTimerModal");
    reset_ref.classList.remove("show");
}


//On load
// Start with an initial value of 20 seconds
const TIME_LIMIT = 10;
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
