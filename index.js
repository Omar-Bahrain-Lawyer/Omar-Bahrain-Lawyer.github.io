var arrow_button=document.getElementsByClassName("back-to-top")[0];
console.log(arrow_button);
var hero=document.getElementById("hero");

document.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        arrow_button.classList.remove('none')
      } else {
        arrow_button.classList.add('none')
      }
});

var hamburger=document.getElementById("hamburger");
var close = document.getElementById("close");
var hamburgermenu=document.getElementsByClassName("hamburger-menu-links")[0];

hamburger.addEventListener("click",function(){
hamburgermenu.classList.toggle("hamburger-menu-show");
})

close.addEventListener("click",()=>{
    hamburgermenu.classList.toggle("hamburger-menu-show");
})