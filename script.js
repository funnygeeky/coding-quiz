//When mouse over box 2, the color changes to orange

//document.getElementById("box2").addEventListener("mouseover",changeColor);

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
var timerEl = document.getElementById ('countdown');
var timer = document.getElementById('timer');

//Timer that counts down from 75
function countdown () {
    var timeLeft = 2;
    //Use the 'setInterval()' method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval (function (){
        //As long as the 'timeLeft' is great than 1
        if (timeLeft > 1) {
            //Set the 'textcontent of 'timerEL to show the remaining seconds
            timerEl.textContent = timeLeft + ' seconds remaining';
            //Decrement timeLeft' by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            //When 'timeLeft is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        }else if (timeLeft === 0) {
            //Use 'clearInterval()'to stop the timer
            clearInterval(timeInterval)
            //Once 'timeLeft gets to 0, set 'timerEl' to an empty string
            timerEl.textContent = '';}
        },1000);
}

// Attach an event listener to the 'start quiz' button element
var startQuizEl = document.querySelector("button");
startQuizEl.addEventListener("click", countdown ());