

//variables for timer and start quiz button
var timerEl = document.getElementById('timer');
var startQuizEl = document.querySelector(".btn");

var showQuestion = document.querySelector("#show");



//variables for question and choices array
var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.choice-text'));


//Array of each question with choices indicating the answer

var questions = [
    {
        question: 'Browsers consider the HTML code in a webpage as a document.That document is actually an object ___',
        choice1: 'that contains the window object',
        choice2:'used in word processing applications like Microsoft Word',
        choice3:'also known as the document object',
        choice4:'that is not an object at all',
        answer:3,
    },
    {
        question: 'What does API stand for?',
        choice1: 'Associated Programs International',
        choice2:'Application Program Interval',
        choice3:'Application Programming Interface',
        choice4:'Apple - Pi Integration',
        answer:3,
    },
    {
        question: 'The Document Object Model, or DOM is:',
        choice1: 'A concept that teaches a visual method of pseudocoding',
        choice2:'The web API that lets you control HTML and CSS',
        choice3:'Another name for Chrome DevTools',
        choice4:'The same thing as a window object',
        answer:2,
    },
    {
        question: 'What does the Storage API do?',
        choice1:'Loops through items of an array to apply a specific function',
        choice2:'Declares variables to be used in HTML DOMs',
        choice3:'Lets you store information in a user\'s browser so it doesn\'t disappear between page loads or visits',
        choice4:'Checks for available browser cache',
        answer:3,
    },
    {
        question: 'In web development, we refer to  user behavior such as a click as an:',
        choice1: 'event',
        choice2:'object method',
        choice3:'event listener',
        choice4:'event handler',
        answer:1,
    }
    ]
    
    var timeLeft = 75;
//Timer that counts down from 75
function countdown () {
    console.log("countdown function being called")
    
    
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
//Function to present a question from the array
// function displayQuestion ()
// for (let i = 0; i < questions.length; i++){
//     console.log(i);
  

// startQuizEl.addEventListener("click", countdown);
startQuizEl.addEventListener("click",() => {
    countdown();
    forEach (function(){


    }
    )
})


    
    

