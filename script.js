//count
let waiting = 0;

function update(){
    document.getElementById("count").textContent =
    `現在${waiting}組待ち`;
}

update();

document.getElementById("plus").onclick = function(){
    waiting++;
    update();
}

document.getElementById("minus").onclick = function(){

    if(waiting > 0){
        waiting--;
    }

    update();
}

//timer
const stopButton = document.getElementById("stop");

let seconds = 0;
let timerId = null;

function updateTimer() {

    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;

    document.getElementById("timer").textContent =
        `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;

}
function startTimer() {
    stopButton.textContent = "ストップ";    

    if (timerId !== null) return; // すでに動いている

    timerId = setInterval(function () {
        seconds++;
        updateTimer();
    }, 1000);
}
function stopTimer() {

    clearInterval(timerId);

    timerId = null;
}

document.getElementById("start").addEventListener("click", function () {
    seconds = 0;
    updateTimer();
    startTimer();
    if(waiting > 0){
        waiting--;
        update();
    }
});

document.getElementById("stop").addEventListener("click", function () {  
    if (seconds > 0){  
        if (timerId === null) {

            // 停止中 → 再開
            startTimer();
            
        } else {

            // 動作中 → 停止
            stopTimer();
            stopButton.textContent = "スタート";

        }
    }

});
