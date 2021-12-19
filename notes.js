// Notes from Stephanie
//Add or remove Id
    // 1. query selector to find the id
    var startScreen = document.getElementById("start-screen")
    //2. Set attribute
    startScreen.setAttribute("id", "hide");
    startScreen.removeAttribute("id", "hide");

//Local Storage
localStorage.setItem("key", "value");
localStorage.getItem("key");

// Local Storage can only store strings.

localStorage.setItem("key", JSON.stringify(4));
JSON.parseInt(localStorage.getItem("key"));

var allHighScores = [];

var newScore = {
    "intiials": "MW",
    "score": "20"
}

allHighScores.push(newScore);

localStorage.setItem('highScores', allHighScores);
localStorage.getItem('highScores')

//To clear local Storage
clearBtn.addEventListener("click", function() {
    localStorage.clear();
})

// Event listener for the start button

// Call a start quiz function
    // hide the start screen
    // unhide the question screen
    //start the timer
    //call the next function

// Population question function


