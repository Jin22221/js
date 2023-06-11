function doFirst(){
  let YYYY = new Date().getFullYear() //2023
  let MM = new Date().getMonth() + 1 // 月份從 0開始
  

  // 年的選單 // 先抓到年是多少
  let year = document.querySelector('#year')
  for(let i = YYYY - 31; i < YYYY + 20; i++){
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

  // 當月的第一天是星期幾
  let firstDay = new Date(`${YYYY},${MM} , 1`).getDay()
  // console.log(firstDay);

  // 當月一共有幾天
  let monthDate = new Date(YYYY, MM, 0).getDate()
  // console.log(monthDate);

  showCalendar(firstDay, monthDate)

  year.addEventListener('change', changeCalendar)
  month.addEventListener('change', changeCalendar)
  
}
function showCalendar(firstDay, monthDate){
  let calendar = document.querySelector('#calendar') // 找到 table
  let amount = firstDay + monthDate // 總天數

  // 按照總天數來決定要排幾列
  for(let i = 0; i < amount; i++){
    if(i % 7 == 0){// 一禮拜 7 天(一列)
      // trWeek = document.createElement('tr')
      // calendar.appendChild(trWeek)
      tr = calendar.appendChild(document.createElement('tr'))
    }
    if(i < firstDay){ 
      // let td = document.createElement('td')
      td = tr.appendChild(document.createElement('td'))
      td.innerText = ''
    }else {
      td = tr.appendChild(document.createElement('td'))
      td.innerText = i - firstDay + 1
    }
  }
}
function changeCalendar() {
  // alert()
  // 清除原來的月曆
  let calendar = document.querySelector('#calendar') // table
  let length = calendar.childNodes.length - 1 // - 1 :扣掉"換行"
      /* 因為已知要清幾行,不然會用 while(清全部的話) */
      for(let i = 2; i <= length; i++){
        calendar.childNodes[i].innerHTML = ''
      }
  // 產生新的月曆
  let chooseYear = document.querySelector('#year').value
  let chooseMonth = document.querySelector('#month').value

  // 重選之後~~當月的第一天是星期幾
  let firstDay = new Date(`${chooseYear},${chooseMonth} , 1`).getDay()

  // 重選之後~~當月一共有幾天
  let monthDate = new Date(chooseYear, chooseMonth, 0).getDate()

  showCalendar(firstDay, monthDate)
}

// year.addEventListener('change', changeCalendar)
// month.addEventListener('change', changeCalendar)
window.addEventListener('load',doFirst)

// 動態新增
/* 
 * 1.建標籤: document.createElement('標籤')
 * 2.將該標籤的屬性和方法寫好
 * 3.找到爸爸，加進去: parent.appendChild()
 */