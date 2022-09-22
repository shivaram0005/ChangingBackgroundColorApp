
let bigBox = document.getElementById("canvas");
let btn = document.getElementById("button");
btn.addEventListener("click",function(){
    bigBox.style.backgroundColor = randomColor();
    bigBox.innerHTML = "Hey you are changing  background color!";
})

function randomColor(){

    let colorNumber = "0123456789ABCDEF";
    let colorPrefix = "#";
    for (let i = 0; i < 6; i++) {
    colorPrefix = colorPrefix + colorNumber[Math.floor(Math.random() * 16)];
    }
    return colorPrefix;
}
