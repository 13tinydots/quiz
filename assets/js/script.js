//declarations
var contAlign = document.getElementById("container");
var headline = document.getElementById("cardHeading");
var ansBlank = document.getElementById("answerSelect");
var ansFeedback = document.getElementById("feedback");
var timerPush = document.getElementById("timer");
var showScores = document.getElementById("showScores");
var wrongAnswer = false;
var timerCount = 60;
var currentQuestion = 0;
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

// page-load function call
init()

function init() {
    welcomeDisp();
    timerCount.value = 60;
// init gets high scores from memory
}
//sets up the display for user
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
// first clears the testing area and configures it to show questions
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
    startTimer();
    currentQuestion = 0;
    showQuestion();
}

function startTimer() {
    timerFn = setInterval(function() {
        timerCount--;
        timerPush.innerText = timerCount;
        
        if (wrongAnswer){
            timerCount = timerCount - 10;
        }
        
        if (timerCount >= 0) {
            if (isWin && timerCount > 0) {
            endGame();
          }
        }
        
        if (timerCount === 0) {  
           endGame();
        }
    }, 1000);
}

function showQuestion() {
    document.getElementById("questionContainer").setAttribute("class", "")
    document.getElementById("cardHeading").innerText = questions[currentQuestion].title;
    document.getElementById("answerOne").innerText = questions[currentQuestion].choices[0];
    document.getElementById("answerTwo").innerText = questions[currentQuestion].choices[1];
    document.getElementById("answerThree").innerText = questions[currentQuestion].choices[2];
    document.getElementById("answerFour").innerText = questions[currentQuestion].choices[3];
       
    document.getElementById("answerOne").addEventListener("click", evalQuestion)
    document.getElementById("answerTwo").addEventListener("click", evalQuestion)
    document.getElementById("answerThree").addEventListener("click", evalQuestion)
    document.getElementById("answerFour").addEventListener("click", evalQuestion)
}

function evalQuestion(e){
    var chosenOption = this.textContent;

    if(chosenOption == questions[currentQuestion].answer){
        console.log('right')
    } else {
        console.log('wrong')
        wrongAnswer = true
    }

    currentQuestion++;
    if(currentQuestion < questions.length){
        showQuestion();
    } else {
        return;
    }
    // sets timer flag for incorrect responses as needed
    // displays correct/incorrect message
}

function endGame() {
    // displays the final score
    // manages high score initial entry
    // stores high scores locally, as list like the note taking app we made.
    //
    // provides button to clear scores, button to call init() to restart, 
}

function highScoreBtn() {
// with event listener
//new function: high score storage and diplay - hide display button - include return
}

