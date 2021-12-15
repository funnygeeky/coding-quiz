//When mouse over box 2, the color changes to orange

document.getElementById("box2").addEventListener("mouseover",changeColor);

function changeColor() 
{
    document.getElementById("box2").style.backgroundColor="orange";
}
function changeColor1() 
{
    document.getElementById("box2").style.backgroundColor="blue";
}
// var box2 = document.getElementById("box2");
// var hover = document.getElementById("hover");
// var out = document.getElementById("out");

// hover.addEventListener("mouseover",function()
// {
//     if (hover.onmouseover == true)
//     {
//         box2.style.backgroundColor = "orange";
//     } 
//     if(out.onmouseover == false) 
//     {
//         box2.style.backgroundColor = "blue";
//     }
// });
