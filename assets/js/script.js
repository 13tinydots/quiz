//declarations
var contAlign = document.getElementById("container");
var headline = document.getElementById("cardHeading");
var ansBlank = document.getElementById("answerSelect");
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
 
    document.getElementById("startTest").addEventListener("click", beginTest);
}
// first clears the testing area and configures it to show questions
function beginTest() {
    document.getElementById("startTestContainer").setAttribute("class", "hidden");
    console.log("begin test");
    headline.textContent = "";
    headline.style.justifyContent = "left";
    headline.style.textAlign = "left";
    headline.style.marginLeft = "1rem";
    ansBlank.textContent = "";
    ansBlank.style.textAlign = "left";
    ansBlank.style.marginLeft = "2rem";
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
    document.getElementById("posFeedback").setAttribute("class", "hidePosFeedback");
    document.getElementById("negFeedback").setAttribute("class", "hideNegFeedback");
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
        document.getElementById("posFeedback").setAttribute("class", "");
    } else {
        console.log('wrong')
        wrongAnswer = true
        document.getElementById("posFeedback").setAttribute("class", "");
    }

    currentQuestion++;
    if(currentQuestion < questions.length){
        showQuestion();
    } else {
        endGame();
    }

   
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

