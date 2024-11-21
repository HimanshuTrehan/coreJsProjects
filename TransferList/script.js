let leftList = ["Ramesh","Suresh","Rohan","Rahul"]

let rightList = ["Mahir","Prateek" ,"Kushar","Sumant","Himanshu"]


const leftListElementList = document.getElementById('left-list')

const rightListElementList = document.getElementById('right-list')

const  transferAllToLeftElement = document.getElementById("tranfer-all-left")
const  transferSelectedToLeftElement = document.getElementById("tranfer-selected-left")

const  transferSelectedToRightElement = document.getElementById("tranfer-selected-right")
const  transferAllToRightElement= document.getElementById("tranfer-all-right")


function addElementsToLeft()
{
    leftListElementList.innerHTML = ''
      leftList.forEach((item) =>{
        leftListElementList.append(addHTMLElement(item))
      })
}

function addElementsToRight()
{
    rightListElementList.innerHTML = ''
      rightList.forEach((item) =>{
        rightListElementList.append(addHTMLElement(item))
      })
}


function addHTMLElement(item){

    const listItem = document.createElement('li')
    const element = document.createElement('div')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.id = item
    const label = document.createElement('div')
    label.innerText = item
    element.style.display = 'flex';
    element.style.alignItems = 'center';
    element.style.gap = '10px';
    element.append(checkbox)
    element.append(label)

    listItem.append(element)


    return listItem

    
}

addElementsToLeft()
addElementsToRight()




transferAllToLeftElement.addEventListener('click',() =>{

    leftList.push(...rightList)
    rightList = []
    
    addElementsToLeft()
    addElementsToRight()

})

transferSelectedToLeftElement.addEventListener('click',() =>{
  const selectedItems = []
  const unselectedItems = []
  rightList.forEach((item)=>{
    const element = document.getElementById(item)

    if(element.checked){
        selectedItems.push(item)
    }else{
      unselectedItems.push(item)
    }

  })

    leftList.push(...selectedItems)
    rightList = unselectedItems
    addElementsToLeft()
  addElementsToRight()
})

transferSelectedToRightElement.addEventListener('click',() =>{
 
  const selectedItem = []
  const remainingItems = []

  leftList.forEach((item)=>{

    const element = document.getElementById(item)

    if(element.checked){
      selectedItem.push(item)
    }else{
      remainingItems.push(item)
    }

  });

  rightList.push(...selectedItem)
  leftList  = remainingItems
  

  addElementsToLeft()
addElementsToRight()
})

transferAllToRightElement.addEventListener('click',() =>{
    rightList.push(...leftList)
    leftList = []
    addElementsToLeft()
    addElementsToRight()
})




function transferAllToLeft(){

}

function transferAllToRight(){
    
}

function transferSelectedToLeft(){

}

function transferSelectedToRight(){

}


