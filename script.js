var startBtn = document.querySelector("#startQuizBtn");
var questionTitle = document.querySelector("#question-title");
var questionChoices = document.querySelector("#question-choices");
var resultsScreen = document.querySelector("#results-screen");
var score = document.querySelector("#score");
var questionScreen = document.querySelector("#question-screen");
var startScreen = document.querySelector("#start-screen");
var questionFeedback = document.querySelector("#question-feedback");
var finalScore = document.querySelector("#finalScore");

var numberOfCorrectAnswers = 0;
// var countDownTimer = 15;

var currentQuestionIndex = 0;

// timers vars and function 
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("timer");
// number of seconds var 
var secondsLeft = 20;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till the end of quiz.";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }
  
  // Function to create and append end game image
  function sendMessage() {
    timeEl.textContent = " ";
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "Game_over.jpeg");  //"images/image_1.jpg
    mainEl.appendChild(imgEl);
  
  }
  
  setTime();



// Array of questions
var questions = [
    {
        title: "Comonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"

    },

    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"

    },

    {
        title: "Arrays in Javascript can be used to store _____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"

    },

    {
        title: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"

    },

    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"

    }]


finalScore.textContent = "Final Score: " + localStorage.getItem("finalScore");

startQuizBtn.addEventListener("click", function () {
        
        setTime();
        showQuestion();
        startScreen.setAttribute("class", "hide");
        // startTimer();


        })

// function startTimer(){

//     setInterval(() => {
//         countDownTimer = countDownTimer -1;
//     }, 1000);
// }


function showQuestion(){

    questionChoices.textContent = "";
    
    questionTitle.textContent = questions[currentQuestionIndex].title;
    questions[currentQuestionIndex].choices.forEach(function (element){
        var choice = document.createElement("button");
        choice.textContent = element;
        questionChoices.appendChild(choice);
        choice.addEventListener("click", checkAnswer )
    });
}

function checkAnswer () {
            console.log(this.textContent)

            var userAnswer = this.textContent;
            var answer = questions[currentQuestionIndex].answer;
            if(userAnswer === answer){
                questionFeedback.textContent = "Correct!";
                numberOfCorrectAnswers += 1;
            }
            else{
                questionFeedback.textContent = "Wrong, sorry!";

            }

            if(questions.length -1 === currentQuestionIndex){
                    localStorage.setItem("finalScore", numberOfCorrectAnswers )
                    showResult();
            }
            else {
                currentQuestionIndex += 1;
                showQuestion();
                
            }
   }

function showResult(){
resultsScreen.removeAttribute("class")
score.textContent = " You got " + numberOfCorrectAnswers + " out of 5";
questionScreen.setAttribute("class", "hide");

}

function endGame(){

    if(countDownTimer < 0){

    }
}


