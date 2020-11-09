"use strict"
let windowMy = document.querySelector(".windows")
let closeWindowBtn = document.querySelector(".close-window")
let overlay = document.querySelector(".overlay")
let Allwind = document.querySelectorAll(".wind")
//window to pop also with overlay
const openWindow = function(){

  windowMy.classList.remove("hidden")
  overlay.classList.remove("hidden")
}
Allwind.forEach(wind =>{wind.addEventListener("click",openWindow)})

const closeWindow = function(){

  windowMy.classList.add("hidden");
  overlay.classList.add("hidden");

}
//Close window and hide overlay
closeWindowBtn.addEventListener("click",closeWindow)
overlay.addEventListener("click",closeWindow)
//keyborad event
document.addEventListener("keydown",function(event){
  if(event.key === "Escape" && !windowMy.classList.contains("hidden")){
    closeWindow()

  }


})