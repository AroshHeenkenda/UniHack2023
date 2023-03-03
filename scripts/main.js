

//Timer Function
function formatTimeLeft(time) {

    let minutes = Math.floor(time / 60); // The largest round integer less than or equal to the result of time divided being by 60.
    let hours = Math.floor(time / 3600); //Will be largest round integer divided by 3600
    let seconds = time % 60; // Seconds are the remainder of the time divided by 60 (modulus operator)
    
    // If the values for each is less than 10, then display with a leading zero
    if (seconds < 10) {seconds = `0${seconds}`;}
    if (minutes < 10) {minutes = `0${minutes}`;}
    if (hours < 10) {hours = `0${hours}`;}
    
    console.log(`${hours}:${minutes}:${seconds}`);

    // The output in MM:SS format
    return `${hours}:${minutes}:${seconds}`;
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
const TIME_LIMIT = 61;
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