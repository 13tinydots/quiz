var contAlign = document.getElementById("container");
var headline = document.getElementById("cardHeading");
var ansBlank = document.getElementById("answerSelect");
var ansFeedback = document.getElementById("feedback");
var timerPush = document.getElementById("timer");
var showScores = document.getElementById("showScores");

init()

function init() {
    welcomeDisp();
// timer is reset
// init gets high scores from memory
}

function welcomeDisp(){
    headline.textContent = "Coding Quiz Challenge";
    headline.style.justifyContent = "center";
    headline.style.textAlign = "center";
    headline.style.marginTop = "1rem";
    ansBlank.style.textAlign = "center";
    ansBlank.style.marginLeft = "1rem";
    ansBlank.style.marginRight = "1rem";
    ansBlank.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!';
    ansFeedback.textContent = "";    
    ansFeedback.style.justifyContent = "center";
    ansFeedback.innerHTML = `<button id="startTest" type="button">Begin Challenge!</button>`;
    document.getElementById("startTest").style.color = "#7b5e7b";
    document.getElementById("startTest").style.background = "#D7D9D7";
    document.getElementById("startTest").style.border = ".05em solid #7b5e7b";
    document.getElementById("startTest").style.borderRadius = ".25em";
    document.getElementById("startTest").addEventListener("click", beginTest);
}

function beginTest() {
    console.log("begin test");
    headline.textContent = "";
    headline.style.justifyContent = "left";
    headline.style.textAlign = "left";
    headline.style.marginLeft = "1rem";
    ansBlank.textContent = "";
    ansBlank.style.textAlign = "left";
    ansBlank.style.marginLeft = "2rem";
    ansFeedback.innerHTML = `<h3 id="feedback"></h3>`;

}

function highScoreBtn() {
// with event listener
//new function: high score storage and diplay - hide display button - include return
}



//new function: setup an object literal that appends appropriate button code
// -- for answers one through four that includes onclick listeners for each button

//new function: setup control loop timer that includes a flag to be reset
//-- if flag is tripped then on next interval the timer will be reduced by 5 seconds
//-- if the timer === zero then the game is over - do not enter name for score.
//-- if all questions are answered then the game is over and score is recorded
// subroutine: calls random question picker and calls object literal function to display
//  card class as buttons for response by event listeners


//new function: random question picker that checks for if the question has already
// -- been asked.

//new card class: question: answer 1-4: includes flag for previously asked, correct answer.

//use the class, not sure how to store, and recall - maybe use JSON?


// list of all questions, choices, and answers
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];