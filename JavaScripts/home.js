var modal = document.getElementById("lightBox");
var modalImg = document.getElementById("img01");
var smallGalleryimages = document.getElementsByClassName("smallGallery");

for(var l = 0; l<smallGalleryimages.length; l++){
    smallGalleryimages[l].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
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

function openNav() {
    document.getElementById("Navigation").style.width = "100vw";
}

function closeNav() {
    document.getElementById("Navigation").style.width = "0";
}

function searchbox() {
    document.getElementById("searchbox").style.width = "100px";
}