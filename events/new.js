function doFirst(){
  // 跟 HTML 產生關聯，再建立事件聆聽功能
  // 關鍵是"表單＂,送出後抓裡面的值
  document.querySelector('#theForm').onsubmit = setEvent
}

function setEvent(e){
  e.preventDefault()

  let events = ['contextmenu','select','change','input','scroll','resize']

  for(let i = 0; i < events.length; i++){
    // 先跟每個 checkbox 產生關聯
    let yourCheck = document.getElementById(events[i])

    // 如果有勾選，幫整個網頁建立該事件的聆聽功能
    if(yourCheck.checked){
      document.addEventListener(events[i], report)
      // resize 只有針對 window
      // 印出e.target.nodeName的話(window 沒有標籤名稱)
    }else {
      
      document.removeEventListener(events[i], report)
    }
    
  }
  feedback = ''
  // return false;
}
function report(e){
  feedback += `${e.target.nodeName}: ${e.type} \n`
  document.getElementById('feedback').value = feedback
}

window.addEventListener('load',doFirst)