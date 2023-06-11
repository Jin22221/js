function doFirst(){
  let YYYY = new Date().getFullYear() //2023
  let MM = new Date().getMonth() + 1 // 月份從 0開始
  

  // 年的選單 // 先抓到年是多少
  let year = document.querySelector('#year')
  for(let i = YYYY - 20; i < YYYY + 20; i++){
    // 1.建標籤
    let option = document.createElement('option')
    // 預選:今年 // 2.將該標籤的屬性和方法寫好
    if(i == YYYY){
      // option.setAttribute('selected','selected') // 之前 xhtml規定要有屬性值，但她原本就沒屬性值 // 寫法一
      option.selected = true // selected -> html標籤的"屬性" // 寫法二
    }
    option.value = i // option.setAttribute('value', i) // (屬性 , 屬性值)
    option.innerText = i
    // 3.找到爸爸，加進去
    year.appendChild(option)
  }

  // 月的選單
  let month = document.querySelector('#month')
  for( i = 1; i <= 12; i++){
    let option = document.createElement('option')
    if(i == MM){
      option.setAttribute('selected','selected') // option.selected = true
    }
    option.value = i
    option.innerText = i
    month.appendChild(option)
  }

}

window.addEventListener('load',doFirst)

// 動態新增
/* 
 * 1.建標籤: document.createElement('標籤')
 * 2.將該標籤的屬性和方法寫好
 * 3.找到爸爸，加進去: parent.appendChild()
 */