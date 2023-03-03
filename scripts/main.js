

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
}


//On load
// Start with an initial value of 20 seconds
const TIME_LIMIT = 3660;
// Initially, no time has passed, but this will count up
// and subtract from the TIME_LIMIT
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timer_ref = document.getElementById("timer_div");
let timerInterval = null;
timer_ref.innerHTML = `
    <div class="timer">

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
startTimer();