

var counter = 0;
var inceaseBy = 1;
const counterText =  document.getElementById("counter-text")
const incrementButton = document.getElementById('increment-button')
const decrementButton = document.getElementById('decrement-button')
const inputbox = document.getElementById('increment-text');
const resetbtn = document.getElementById('reset-btn');

inputbox.value = 1

// it uses element bubbling as the third paramter is false 

/* eventpropogation means that we are moving from bottom to top

if the third eleemnt is false it creates bubbling effect 

example we habe 2 elements 

1 is top container and other is element inside conatiner 

if we perform click an the value is false 

then first the  output of inside container prints and then the top container output prints

if the value is true then inverse is happening


e. propogation is used to stop bubbling


*/
incrementButton.addEventListener('click',() =>{
    incrementCounterValue()
},false)

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

