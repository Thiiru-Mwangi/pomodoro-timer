const startBtnEl = document.getElementById("start");
const stopBtnEl = document.getElementById("stop");
const resetBtnEl = document.getElementById("reset");
const timerEl = document.querySelector(".timer");

let interval;
let timeLeft = 1500;

function updateTimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    timerEl.innerHTML = formattedTime;
};

function startTimer (){
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if(timeLeft === 0){
            clearInterval(interval);
            alert("Time to take a short break");
            timeLeft = 1500;
            updateTimer();
        };
    }, 1000);
    
};
startBtnEl.addEventListener("click", startTimer);

function stopTimer(){
    clearInterval(interval);
};
stopBtnEl.addEventListener("click", stopTimer);

function resetTimer(){
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer()
};
resetBtnEl.addEventListener("click", resetTimer);