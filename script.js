//variables for timer and start quiz button
var timerEl = document.getElementById('timer');
var startQuizEl = document.querySelector(".btn");
//
//array to hold questions and answers text
var questions = [
    {
        question: "What does API stand for?"
        answers: [
            {text: "Associated Programs International", correct: false },
            {text: "Application Program Interval", correct: false },
            // {text: "Application Programming Interface"}, correct: true},
            {text: "Apple - Pi Integration", correct: false}
        ]
    }



//Timer that counts down from 75
function countdown () {
    console.log("countdown function being called")
    
    var timeLeft = 30;
    //Use the 'setInterval()' method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval (function (){
        console.log(timeLeft);
        timeLeft--;
        //As long as the 'timeLeft' is great than 1
        if (timeLeft > 1) {
            //Set the 'textcontent of 'timerEL to show the remaining seconds
            timerEl.textContent = 'Timer:  '+ timeLeft;
            //Decrement timeLeft' by 1
            timeLeft-= 1;
        }else if (timeLeft === 0) {
            //Use 'clearInterval()'to stop the timer
            clearInterval(timeInterval)
            //Once 'timeLeft gets to 0, set 'timerEl' to an empty string
            timerEl.textContent = '';}
        },1000);
}
// Call the timer to countdown when the start quiz button is clicked

startQuizEl.addEventListener("click", countdown);