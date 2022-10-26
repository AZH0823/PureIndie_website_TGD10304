let ATags = document.querySelectorAll(".actwith > A")
let createAccount = document.querySelector(".createAccount")
let loginAccount = document.querySelector(".loginAccount")
// 紀錄登錄狀態 ture 為 LOGIN頁面,反之為 Create 頁面
let LoginorCreate = '1' //defaul為登入(1),註冊(0)


function clickandRender(e){
  
  let target = e.target
  ATags = document.querySelectorAll(".actwith > A")
  
  // 重複點選防呆
  if(LoginorCreate === target.id)return

   ATags.forEach((el)=>{
      el.classList.remove('active')
      createAccount.classList.remove('active')
      loginAccount.classList.remove('active')
    })
    target.classList.add('active')
  if(target.id !== '1'){
     createAccount.classList.add('active')
      LoginorCreate = '0'
  }else{
    loginAccount.classList.add('active')
    LoginorCreate = '1'
  }
  
}

ATags.forEach((ATag)=>{
  ATag.addEventListener('click',clickandRender)

})
