const ball=document.querySelector(".toggle-ball");
const items=document.querySelectorAll(".side_bar,.navbar,.navbar .logo h2,.toggle,.toggle-ball,.section2,.arrow,.navbar_option a,body");
ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active");
    })
})