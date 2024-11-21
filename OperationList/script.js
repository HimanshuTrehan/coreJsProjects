let values = [];


const addBtn = document.getElementById('add-btn')

const performOperationBtn = document.getElementById('perform-operation')
const operationContainer = document.getElementById('operation-container')
const resultContainer = document.getElementById('result-item-container')

const resetBtn = document.getElementById('reset-btn')


const sortBtn = document.getElementById('sort-operation')
const totalBtn = document.getElementById('total-operation')
const averageBtn = document.getElementById('average-operation')
const minBtn = document.getElementById('min-operation')

const maxBtn = document.getElementById('max-operation')


addBtn.addEventListener('click',(e)=>{
     addNumber()
})

performOperationBtn.addEventListener('click',()=>{
    performOperation()
})

resetBtn.addEventListener('click',()=>{
    resetList()

})

sortBtn.addEventListener('click',()=>{
   sortArray()
})

totalBtn.addEventListener('click',()=>{
    findTotal()
})

averageBtn.addEventListener('click',()=>{
    findAverage()
})

minBtn.addEventListener('click',()=>{
    findMinimum()
})
maxBtn.addEventListener('click',()=>{
    findMaximum()
})


function addNumber(){
  const element = document.getElementById('add-item-input')
  if(element.value){
  values.push(parseInt(element.value))
  }
  element.value = ''
  updateItemList()
}

function updateItemList(){
    const element = document.getElementById('show-item-list')
    element.innerHTML = values
}


function performOperation(){
    if(values.length){
    showOperationContainer()
    }else{
        alert('Please add Items First')
    }
}



function showOperationContainer(){
 

   operationContainer.style.display = 'flex'
   resultContainer.style.display = 'flex'
}

function hideOperationContainer(){
 
    operationContainer.style.display = 'none'
    resultContainer.style.display = 'none'
 }

function resetList(){
     
    values =[]
    hideOperationContainer()
    updateItemList()
}



function sortArray(){
      values.sort((a,b)=>a-b);
      updateResult(values)
}

function findTotal(){

    const result = values.reduce((acc,cur)=>{
        return acc + cur
    },0)
    
    updateResult(result)
    
}

function findAverage(){

    const result = values.reduce((acc,cur)=>{
        return acc + cur
    },0)

    
    
    updateResult(result/values.length)
    
}

function findMinimum(){
    const result = values.reduce((acc,cur)=>{
        if (acc<cur) {
            acc = cur
        }
        return acc
    })
    
    updateResult(result)
}

function findMaximum(){
    const result = values.reduce((acc,cur)=>{
        if (acc>cur) {
            acc = cur
        }
        return acc
    })

    updateResult(result)

}


function updateResult(value){
  const element = document.getElementById('show-result')
   element.innerHTML = value
}

 


