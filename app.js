const ball=document.querySelector(".toggle-ball");
const items=document.querySelectorAll(".side_bar,.navbar,.navbar .logo h2,.toggle,.toggle-ball,.section2,.arrow,.navbar_option a,body");
ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active");
    })
})

const arrows=document.querySelectorAll(".arrow");
const section2images=documnet.querySelectorAll(".section2images");
arrows.forEach((arrow,i)=>{
    arrows.addEventListener("click",()=>{
        section2images[i].style.transform="translateX(-100px)";
    })
})