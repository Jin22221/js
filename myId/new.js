function doFirst(){
  document.title='身分證驗證'
  let checkButton = document.querySelector('#checkButton')
  checkButton.addEventListener('click', check) // document.querySelector('#checkButton').onclick = check
}
function check(){
  let myId = document.querySelector('#myId').value
  // console.log(myId);

  let letters = []
  let fromA = 65
  for(i = fromA; i < fromA + 26; i++){
    letters.push(String.fromCharCode(i))
  }
  // console.log(letters);

  let areaCodeAll = ['10', '11', '12', '13', '14', '15', '16', '17', '34', '18', '19', '20', '21', '22', '35', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33']

  // 檢查輸入的長度
  if(myId.length != 10){
    alert(`輸入資料的長度要有 10 位`)
  }
  // 檢查第一個字是否是 A ~ Z
  myId = myId.toUpperCase() // 字母轉成大寫

  for(let i in letters){
    if(myId.charAt(0) == letters[i]){
      firstLetter = true
      break; // 例如到 C(true), C 後面都是 false
    }else{
      firstLetter = false
      continue;
    }
  }
  if(firstLetter == false){
    alert(`第一個應該是字母 A ~ Z`)
  }
  // 檢查後面九個字是否都是數字
  let num9 = myId.substring(1, myId.length) // (包含 1,不包含 10)
  num9 = parseInt(num9)
  num9 = num9.toString().length // 3(NaN) 或 英文字母之前的數字長度

  if(num9 != 9){
    alert(`後面九個字都要是數字`)
  }
  // 檢查第二個字是否是 1 或 2
  if(myId.charAt(1) != 1 && myId.charAt(1) != 2){
    alert(`第二個字要是 1 或 2`)
  }

  let checkCode = 0
  // 印出 letters 陣列對應 areaCodeAll 陣列的值
  let letter = myId[0]
  let index = letters.indexOf(letter)
  console.log(areaCodeAll[index]);

  // 並計算第一個英文字母的加權
  let areaCode = areaCodeAll[index]
  checkCode = areaCode[0] * 1 + areaCode[1] * 9
  console.log(checkCode);

  // let areaCode = areaCodeAll?


  // 檢查碼
  // let checkCode = 0 // 1
  // 2
  for(i = 1; i <= 8; i++){
    checkCode += parseInt(myId.charAt(i)) * (9 - i)
  }
  console.log(checkCode);
}
window.addEventListener('load',doFirst)