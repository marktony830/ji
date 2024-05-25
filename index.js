const decreaseBtn = document.getElementById('decreaseBtn')
const increaseBtn = document.getElementById('increaseBtn')
const resetBtn = document.getElementById('resetBtn')
const countlable = document.getElementById('countlable')
let count = 0

increaseBtn.onclick = function(){
    count++;
    countlable.textContent = count
}

decreaseBtn.onclick = function(){
    count--;
    countlable.textContent = count
}

resetBtn.onclick = function(){
    count = 0
    countlable.textContent = count
}