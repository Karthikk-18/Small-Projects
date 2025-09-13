const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const countBtn = document.getElementById("count");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countBtn.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countBtn.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countBtn.textContent = count;
}