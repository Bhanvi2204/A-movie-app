// let btn=document.getElementById('darkbtn');
// // let body=document.querySelector('body');

// btn.addEventListener("click",()=>{
//     document.body.classList.toggle('light-mode');
//     // btn.style.backgroundColor="white";
//     if (document.body.classList.contains('dark-mode')) {
//         localStorage.setItem('theme', 'light');
//     } else {
//         localStorage.setItem('theme', 'dark');
//     }
// });

let body=document.querySelector('body');
let btn=document.getElementById('darkbtn');
btn.addEventListener("click",()=>{
    document.body.classList.add('light-mode');
    document.body.classList.add('dark-mode')
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });
