function doFirst(){
  let random = document.querySelectorAll('.random')
  // console.log(random);
  let randomNum 
  let usedNums = []
  for(let i = 0; i < random.length; i++){  
    do {
      randomNum = parseInt(Math.random() * 24) + 1
      // 先產生一個數字
      // 如果 usedNums裡面有存在該數字，就繼續做
    }while (usedNums.includes(randomNum))

    usedNums.push(randomNum)
    random[i].innerHTML = randomNum
  }
    
}

window.addEventListener('load',doFirst)