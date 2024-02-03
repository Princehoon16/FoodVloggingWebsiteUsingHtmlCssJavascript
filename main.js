//Active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");//scroll-on is a class of css in bootstrap
    }                                  //The classList property returns the CSS classnames of an element
    else{
        nav.classList.remove("scroll-on");
    }
   
}
//navbar hide
let navbar=document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(e){ //e is a variable which works as a function argument
    e.addEventListener("click",function(){ //addEventListener is a event listener which perform on an variable 
        navCollapse.classList.remove("show"); //show is class in bootstrap which works that tht show the elemnt on small screens
    });
});
//counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 400, 1200, 3500);
    counter("count2", 200, 1700, 5500);
    counter("count3", 500, 1900, 3000);
    counter("count4", 300, 7000, 8500);
});