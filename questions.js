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
        title: "What is the first index in an array?", 
        choices: ["0", "1", "a", "i"],
        answer: "0"
    },
    {
        title: "What keyword is used to get a copy of a git repository?",
        choices: ["pull", "clone", "push", "commit"],
        answer: "clone"
    }, 
    {
        title: "Fill in the blank: Bootstrap:CSS :: ______:Javascript",
        choices: ["CDN", "HTML", "Git Bash", "jQuery"],
        answer: "jQuery"
    }
  ];

var startQuiz = document.querySelector("#startButton");
var question = document.querySelector(".title");
var quizInfo = document.querySelector(".info");
var optionBox = document.querySelector("#answers");
var displayCounter = document.querySelector("#counter");

var time = questions.length * 15;

var highscores = {};


startQuiz.addEventListener("click", function(){
    console.log("Start button clicked");
    setInterval(function() {
        time--;
        console.log(time);
        displayCounter.textContent = time;
    }, 1000);
    for (var i = 0; i < questions.length; i++){
        //gets rid of quiz info on page
        quizInfo.textContent = "";
        //sets title to question
        question.textContent = questions[i].title;
        console.log("Question title: " + questions[i].title);
        //creates buttons for each option
        for (var j = 0; j < questions[i].choices.length; j++){
            console.log("questions[i].choices.length: " + questions[i].choices.length);
            var option = document.createElement("button");
            option.setAttribute("class", "btn btn-primary btn-option");
            option.textContent = questions[i].choices[j];
            optionBox.appendChild(option);
        }
    }
});


//Page that shows each individual question
//div at the bottom shows whether answer is right or wrong with line above
//if answer is wrong deduct 15 seconds from time

//title All Done!
//Shows score
//Enter Initials form with submit button

//After entering submit got to High Score screen
//display high score correctly, all high scores in an array and use JSON.stringify...
//Go Back button and Clear Highscores button
