const userList = document.querySelectorAll('li.user')
const silderMemu = document.querySelector(".header-navList")
const iconActive = document.querySelector(".tool-icon")
const body = document.querySelector("body")
const menuIcon = document.querySelector('.tool-icon .fa-bars')
let iconAction = false
function userActive(e){
  // console.log('click')
  let target = e.currentTarget
  console.log(target.className)
  userList.forEach((el)=>{
    el.className = `user non-active d-flex`
    // el.classList.add('non-active')
  })
   target.classList.remove('non-active')
   target.classList.add('active')

}
// 社群評論點擊監聽
userList.forEach(user=>{
  user.addEventListener('click',userActive);
})

iconActive.addEventListener("click",(e)=>{
  if(e.target.className.includes("fa-bars")){
    iconAction =! iconAction
    iconAction ? menuIcon.classList.add("active") : menuIcon.classList.remove("active") 
    iconAction ? body.classList.add("overflow"): body.classList.remove("overflow")
    silderMemu.classList.toggle("iconActive")
  }
})

// RWD 將觸發事件給重新整理
window.addEventListener("resize",()=>{
  let innerWidth = window.innerWidth


  if(innerWidth < 700 && iconAction ){
    body.classList.add("overflow")
  }else{
    body.classList.remove("overflow")
  }

})



