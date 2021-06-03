// Declaration of Elements to be targeted / used

// Intro to the quiz
const intro = document.getElementById("intro");

// Start button and Timer elements
const startBtn = document.getElementById("start-btn");
const timeEl = document.getElementById("timeEl");

// Quiz questions element
const quizEl = document.getElementById("question-container");

// Score elements

// Result elements

// Initial element

//  Quiz multiple choice element

//  Back button queryselector

// Array of questions
var questions = [
  {
    question: "Comonly used data types DO NOT include:",
    choice1: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },

  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choice2: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },

  {
    question: "Arrays in Javascript can be used to store _____.",
    choice3: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },

  {
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    choice4: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },

  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice5: ["Javascript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log",
  },
];

//  Starting var / index of questions array
var currentQuestionIndex = 0;

// Starting var for Score count
var score = 0;

// The start btn event listener + Function to trigger  when the Btn is clicked --- the quiz starts, score is set to null, button disappears, questions display, timer starts
startBtn.addEventListener("click", function () {
  //  startBtn and intro p element content disp
  startBtn.style.display = "none";
  intro.style.display = "none";

  quizEl.style.display = "flex";

  timeEl.style.display = "flex";

  //   calls / triggers the function for questions and the timer/clock

  startTimer();
});

var timerCount = 30;

// Function to display questions
function displayQuestions() {
  question.textContent = questions[currentQuestionIndex].question;
  choice1.textContent = questions[currentQuestionIndex].choice1;
}

// Function to start the timer
function startTimer() {
  // Sets the timer to decrement
  let timer = setInterval(function () {
    timerCount--;
    timeEl.textContent = timerCount + "s";
  }, 1000);
}
