function doFirst(){
  let random = document.querySelectorAll('.random')
  // console.log(random);
  
  for(let i = 0; i < random.length; i++){
    let randomNum = parseInt(Math.random() *24) + 1
    random[i].innerHTML = randomNum
  }
    
}

window.addEventListener('load',doFirst)