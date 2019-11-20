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
var results = document.querySelector("#results");
var optionButtons = document.querySelectorAll(".btn-option");

var time = questions.length * 15;

var highscores = {};
var questionNumber = 0;

//displays current question
function displayQuestion(){
    //remove prior options
    while(optionBox.firstChild){
        optionBox.removeChild(optionBox.firstChild);
    }
    if(questionNumber < questions.length){
        question.textContent = questions[questionNumber].title;
        console.log("Question title: " + questions[questionNumber].title);
        for (var j = 0; j < questions[questionNumber].choices.length; j++){
            console.log("questions[questionNumber].choices.length: " + questions[questionNumber].choices.length);
            var option = document.createElement("button");
            option.setAttribute("class", "btn btn-primary btn-option col-md-12");
            option.textContent = questions[questionNumber].choices[j];
            optionBox.appendChild(option);
            console.log("questionNumber: " + questionNumber)
        }
    }else{
        return;
    };
};

//quiz started
startQuiz.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("Start button clicked");
    startQuiz.remove();
    setInterval(function() {
        time--;
        console.log(time);
        displayCounter.textContent = time;
    }, 1000);
    //gets rid of quiz info on page
    quizInfo.textContent = "";
    displayQuestion();
});

document.addEventListener('click', function (event) {
    if ( event.target.classList.contains( 'btn-option' ) ) {
        console.log("Option clicked");
        console.log(event.target.textContent);
        if(event.target.textContent === questions[questionNumber].answer){
            results.textContent = "Correct";
        }else{
            results.textContent = "Wrong";
            time = time - 15;
        }
    }
    questionNumber++;
    displayQuestion();
}, false);





//title All Done!
//Shows score
//Enter Initials form with submit button

//After entering submit got to High Score screen
//display high score correctly, all high scores in an array and use JSON.stringify...
//Go Back button and Clear Highscores button
