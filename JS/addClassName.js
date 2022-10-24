let userList = document.querySelectorAll('li.user')
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

