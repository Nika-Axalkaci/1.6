const btn = document.querySelector("#btn")
const closebtn = document.querySelector('#close')
const modal = document.querySelector("#modal")

btn.addEventListener('click', ()=>{
  modal.style.display = "block"
  
  
})
closebtn.addEventListener("click",()=>{
  modal.style.display = "none"
  
})
// TASK2
const colorbtn = document.querySelector('#colorbtn')
const inputEl = document.querySelector("input")
const colors = ['red','green','black','blue','white']

colorbtn.addEventListener('click',()=>{
  const inputColor = inputEl.value  
  if(colors.includes(inputColor)){
    document.body.style.backgroundColor = inputColor

  }
  else{
    alert(`we don't have this color`)
  
  }
})
// TASK3
const inputAverage = document.querySelector('#inputAverage')
const averagebtn = document.querySelector("#averagebtn")
const resultEl = document.querySelector("#result")

averagebtn.addEventListener("click",() =>{
  const arr =  inputAverage.value.split(":")
  const numbers = arr.map(Number)
  let result = 0
  let sum = 0
  for(let i of numbers){
    sum+=i
  }
  result =  sum / arr.length
  resultEl.innerHTML= result
})






