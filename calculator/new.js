function doFirst(){
  // 跟 HTML 產生關聯，再建立事件聆聽功能
  // 關鍵是"表單＂,送出後抓裡面的值
  document.querySelector('#theForm').onsubmit = calculate
}

function calculate(){
  let quantity = document.querySelector('#quantity').value
  let price = document.querySelector('#price').value
  let tax = document.querySelector('#tax').value
  let discount = document.querySelector('#discount').value
  let total = quantity * price
  tax /= 100
  tax++

  total *= tax

  total -= discount

  // total = total.toFixed(2) // 小數點後兩位

  total = Math.round(total)

  document.querySelector('#total').innerText = total

  return false;
  // alert(price)
}

window.addEventListener('load',doFirst)