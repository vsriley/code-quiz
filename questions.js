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

var startQuiz = document.querySelector("#purpleButton");
var question = document.querySelector("#title");
var quizInfo = document.querySelector("#info");
var optionBox = document.querySelector("#answers");

var time = questions.length * 15;


startQuiz.addEventListener("click", function(){
    for (var i = 0; i < questions.length; i++){
        //gets rid of quiz info on page
        quizInfo.setAttribute("style", "display: none");
        //sets title to question
        question.textContent = question[i].title;
        //creates buttons for each option
        for (var j = 0; j < questions.choices.length; j++){
            var option = document.createElement("button");
            option.setAttribute("class", "btn btn-primary btn-option");
            option.textContent = questions.choices[i];
            optionBox.appendChild(option);
        }
    }
})
  