let imgOjg= null;
imgOjg = document.getElementById("myImg");
function init(){
    imgOjg = document.getElementById("myImg");
    imgOjg.style.position = "relative";
    imgOjg.style.left = "0px"
}
function moveRight(){
    imgOjg.style.left = parseInt(imgOjg.style.left) + 10 + "px";
}
window.onload = init;