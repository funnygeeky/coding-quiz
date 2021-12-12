script.js
//When mouse over box 2, the color changes to orange
document.getElementById("box2").addEventListener("mouseover,changeColor");
function changeColor() {
    document.getElementById("box2").style.backgroundColor="orange";
}