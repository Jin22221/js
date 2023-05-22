function doFirst(){
  // 跟 HTML 產生關聯，再建立事件聆聽功能
  // 關鍵是"表單＂,送出後抓裡面的值
  document.querySelector('#theForm').onsubmit = calculate
}

function calculate(){
  let height = document.querySelector('#height').value
  let weight = document.querySelector('#weight').value

  let bmi = weight / Math.pow(height / 100, 2)

  document.querySelector('#total').innerText = bmi.toFixed(2)

  return false;
  
}

window.addEventListener('load',doFirst)