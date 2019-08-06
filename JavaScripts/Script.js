//sticky navigation bar
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("Navigation");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    }

    else {
        navbar.classList.remove("sticky");
    }
}

//homepage landing image slider 
var myIndex = 0;
carousel();

function carousel(){
    var i;
    var x = document.getElementsByClassName("myImageSlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }

    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 5500);
}