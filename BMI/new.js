function doFirst(){
  // 跟 HTML 產生關聯，再建立事件聆聽功能
  // 關鍵是"表單＂,送出後抓裡面的值
  document.querySelector('#theForm').onsubmit = calculate
}

function calculate(){
  // 女生介於 18.5 ~ 22
  let height = document.querySelector('#height').value
  let weight = document.querySelector('#weight').value

  let bmi = weight / Math.pow(height / 100, 2)

  bmi = bmi.toFixed(2)

  document.querySelector('#total').innerText = bmi

  if(bmi < 18.5) {
    document.querySelector('#total').innerText += ` (體重過輕)`
  }else if(bmi > 22.0){
    // bmi >= 18.5 且 bmi > 22.0
    document.querySelector('#total').innerText += ` (體重過重)`
  }else{
    // 18.5 ~ 22
    document.querySelector('#total').innerText += ` (標準)`
  }

  return false;
  
}

window.addEventListener('load',doFirst)