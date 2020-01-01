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

var startQuiz = document.getElementById("startButton");
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

//function that clears the quiz, displays that the user is all finished, shows their score and asks for their initials
//store score and initials in local storage
function finishedQuiz(){
    var score = displayCounter.textContent;
    console.log("Final Score: " + displayCounter.textContent);
    localStorage.setItem("currentScore", score);
    question.textContent = "All Done! Your score is " + displayCounter.textContent;
    displayCounter.textContent = "";
    results.textContent = "";

    //create form which asks for users initials

    var submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("class", "btn btn-primary mb-2");
    submitButton.setAttribute("style", "margin-left: 30px");
    submitButton.setAttribute("onclick", "window.location.href = 'highscore.html'");
    submitButton.innerHTML = "Enter Your High Score";
    optionBox.setAttribute("style", "text-align: center");
    optionBox.appendChild(submitButton);

    //figure out a way that when the restart button is clicked the quiz starts again
    var restartButton = document.createElement("button");
    restartButton.setAttribute("type", "submit");
    restartButton.setAttribute("class", "btn btn-primary mb-2");
    restartButton.setAttribute("style", "margin-left: 30px");
    restartButton.innerHTML = "Restart Quiz";
    optionBox.setAttribute("style", "text-align: center");
    optionBox.appendChild(restartButton);


};

//quiz started
startQuiz.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("Start button clicked");
    startQuiz.remove();
    var myInterval = setInterval(function() {
        time--;
        console.log(time);
        displayCounter.textContent = time;
    if(questionNumber >= questions.length){
        clearInterval(myInterval);
        finishedQuiz();
    }
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
    //if they have reached the end of the quiz
    if(questionNumber >= questions.length){
        return;
    }
}, false);





//Enter Initials form with submit button

//After entering submit go to High Score screen
//display high score in correct order, all high scores in an array and use JSON.stringify...
//Create Go Back button (restart quiz?) and Clear Highscores button
//clear highscores button will clear local storage


