function doFirst(){
  // 跟 HTML 產生關聯，再建立事件聆聽功能
  // 關鍵是"表單＂,送出後抓裡面的值
  document.querySelector('#theForm').onsubmit = addTask
}

tasks = []

function addTask(e){
  e.preventDefault()

  let feedback = ``

  let task = document.querySelector('#task')

  tasks.push(task.value)
  task.value = '' // 把輸入的值清掉

  feedback += `You have ${tasks.length} task(s) in To-Do List.`
  feedback += `<ol><li>`
  feedback += tasks.join(`</li><li>`) // 陣列組成字串
  feedback += `</li></ol>`
  
  document.querySelector('#feedback').innerHTML = feedback
  
  // 只要產生 li => 陣列, li 建事件聆聽功能
  
  

  
    
  // 按了之後 removeTask
  // 按到時抓 index, tasks.splice()
  // tasks.length 也要改變
}
// function removeTask(e){
//   console.log(e.target)
// }



window.addEventListener('load',doFirst)