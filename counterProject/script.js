

var counter = 0;
var inceaseBy = 1;
const counterText =  document.getElementById("counter-text")
const incrementButton = document.getElementById('increment-button')
const decrementButton = document.getElementById('decrement-button')
const inputbox = document.getElementById('increment-text');
const resetbtn = document.getElementById('reset-btn');




    inputbox.value = 1


incrementButton.addEventListener('click',() =>{
    incrementCounterValue()
})

resetbtn.addEventListener("click",() =>{
    resetCounter()
})
decrementButton.addEventListener('click',() =>{
    decrementCounterValue()
})

inputbox.addEventListener('input', function() {
    const inputValue = parseInt( inputbox.value);
    updateIncreaseBy(inputValue)
});

function incrementCounterValue(){
    counter+=inceaseBy
    counterText.innerText = counter
}

function decrementCounterValue(){
    counter-=inceaseBy
    counterText.innerText = counter
}

function updateIncreaseBy(value){
     inceaseBy = value
}

function resetCounter(){
    counter = 0;
    inceaseBy = 0;
    counterText.innerText = 0
    inputbox.value = 0
}

