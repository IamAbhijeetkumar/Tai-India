var slides = document.getElementsByClassName("slide");
var index = 0;
function goLeft(){
    if(index == 0) index = slides.length - 1;
    else index++;

    slides[0].style.marginLeft = "-" + index * 1500 + "px";
}
function goRight(){
    if(index == slides.length - 1) index = 0;
    else index++;

    slides[0].style.marginLeft = "-" + index * 1500 + "px";
}

setInterval(goRight,10000);