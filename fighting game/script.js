var leo = document.querySelector(".rightPlayer")
var birdie = document.querySelector(".leftPlayer")
var right = 0;
var left = 0;
function animation(event){
    console.log(event.keyCode)
  if(event.keyCode===39 && right<500){
    leo.src = "/images/forward.gif"
  right += 15;
  leo.style.left = right + "px"
  setTimeout(function(){
    character.src = "/images/leo.gif"
},1000)
  
  }

  if(event.keyCode===37 && right>10){
    leo.src = "/images/backword.gif"
  right -= 15;
  leo.style.left = right + "px"
  setTimeout(function(){
    character.src = "/images/leo.gif"
},1000)
  
  }

  if(event.keyCode===38){
    leo.src = "/images/leo-winloop.gif"
//   right -= 15;
//   leo.style.left = right + "px"
  setTimeout(function(){
    character.src = "/images/leo.gif"
},1000)
  
  }


  (event.keyCode===68 && left<500)
    birdie.src = "/images/birdie.gif"
 left += 20 ;
  birdie.style.right = left + "px"
  setTimeout(function(){
    character.src = "/images/birdie.gif"
},1000)
}
  

  


window.onkeydown=animation