window.addEventListener("load", init);

function Class(elem){
    return document.getElementsByClassName(elem);
}

function $(elem){
    return document.querySelector;
}

function ß(elem){
    return document.querySelectorAll;
}


function init(){
    setInterval(function(){
        setTimeout(lamap1,2000);
        setTimeout(lamap2,3000);
        setTimeout(lamap3,4000);
        setTimeout(lamap4,5000);
        setTimeout(lamap1,6000);
    },6000)
}

function lamap1(){
    Class("piros")[0].style.backgroundColor = "red";
    Class("sarga")[0].style.backgroundColor = "black";
    Class("zold")[0].style.backgroundColor = "black";
}

function lamap2(){
    Class("piros")[0].style.backgroundColor = "red";
    Class("sarga")[0].style.backgroundColor = "yellow";
    Class("zold")[0].style.backgroundColor = "black";
}
function lamap3(){
    Class("piros")[0].style.backgroundColor = "black";
    Class("sarga")[0].style.backgroundColor = "black";
    Class("zold")[0].style.backgroundColor = "green";
}
function lamap4(){
    Class("piros")[0].style.backgroundColor = "black";
    Class("sarga")[0].style.backgroundColor = "yellow";
    Class("zold")[0].style.backgroundColor = "black";
}



