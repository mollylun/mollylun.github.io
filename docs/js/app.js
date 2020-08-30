//mobile menu
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

// document.addEventListener('scroll',()=>{
//     var scroll_position = window.scrollY;
//     if(scroll_position >250){
//         header.style.backgroundColor = "#fff"
//     }else{
//         header.style.backgroundColor = "transparent"
//     }
// });


//progress bar
// const body = document.querySelector("body");
// const progressBar = document.querySelector(".progress");


// window.addEventListener("scroll",() =>{
//     let scrollValue = window.scrollY;
//     let bodyHeight = body.clientHeight;

//     let progressPercentage =(scrollValue / bodyHeight) * 100;

//     progressBar.style.width = progressPercentage + "%";
// })

//header appear



