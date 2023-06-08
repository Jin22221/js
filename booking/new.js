function doFirst(){
  // 跟 HTML 產生關聯，再建立事件聆聽功能
  // 關鍵是"表單＂,送出後抓裡面的值
  document.querySelector('#theForm').onsubmit = calculate
}

function calculate(e){
  e.preventDefault()
  let start = document.querySelector('#start').value
  let end = document.querySelector('#end').value
  // console.log(start);

  let day = 24 * 60 * 60 * 1000 // 一天有 86400000 毫秒

  let startDate = new Date(start)
  let endDate = new Date(end)
  // console.log(startDate);
  // console.log(typeof(start));

  

  
  
  let message = ''
  
  if(startDate <= endDate){
    let diff = endDate - startDate // 會自動轉成毫秒數
    if(diff <= day){ // 小於一天還是算一天
      // interval 間隔
      interval = `1 day.`
    }else{
      interval = `${Math.round(diff / day)} days.`
    }
    message += `The room has been scheduled starting on ${startDate.toLocaleDateString()} and ending on ${endDate.toLocaleDateString()}, which is a period of <span style="color: maroon;">${interval}</span>`
  }else{
    message += `The start date must come before the end date.`
  }

  document.querySelector('#result').innerHTML = message
}

window.addEventListener('load',doFirst)