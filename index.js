const second = document.querySelector(".second");
const milisecond = document.querySelector(".milisecond");
const minute = document.querySelector(".minute");
const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");
const stopBtn = document.querySelector(".stop");

let setIntervalSecond;
let setIntervalMiliSecond;
let satIntervalMinute;

function start(){
     startBtn.disabled = true;
     resetBtn.disabled = false;
     stopBtn.disabled = false;
     stopMinute = setInterval(stopedMinute, 3540000);
     stopSecond = setInterval(stopedSecond, 60000);
     stopMiliSecond = setInterval(stopedMiliSecond, 1000);
     setIntervalSecond = setInterval(secondAdder, 1000);
     setIntervalMiliSecond = setInterval(miliSecondAdder,1);
     satIntervalMinute = setInterval(minuteAdder,60000);
     
}

function stop(){
    startBtn.disabled = false;
    resetBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(stopMinute);
    clearInterval(stopMiliSecond);
    clearInterval(stopSecond);
    clearInterval(satIntervalMinute);
    clearInterval(setIntervalSecond);
    clearInterval(setIntervalMiliSecond);
}

function reset(){

    startBtn.disabled = false;
    resetBtn.disabled = true;
    stopBtn.disabled = false;

    clearInterval(setIntervalSecond);
    clearInterval(setIntervalMiliSecond);

    second.innerHTML = "0";
    milisecond.innerHTML = "0";
    minute.innerHTML = "0";

}

function secondAdder(){
    
    second.innerHTML = Number(second.innerHTML)+1;
};

function miliSecondAdder(){

    milisecond.innerHTML = Number(milisecond.innerHTML)+1;
}

function minuteAdder(){

    minute.innerHTML = Number(minute.innerHTML)+1;
}


function stopedMinute(){
    minute.innerHTML = "0";
}

function stopedSecond(){
    second.innerHTML = "0";
}

function stopedMiliSecond(){

    milisecond.innerHTML = "0";
}