//When mouse over box 2, the color changes to orange

//document.getElementById("box2").addEventListener("mouseover",changeColor);

//function changeColor() {
    //document.getElementById("box2").style.backgroundColor="orange";
//}
var box2 = document.getElementById("box2");

box2.addEventListener("mouseover",function()
{
    if (box2.onmouseover == true) {
        box2.style.backgroundColor="orange";
    }
    if (box2.onmouseover==false) {
    box2.style.backgroundColor="blue";
    }
});