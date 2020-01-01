let highScores;
const submitButton = document.getElementById("submitInitials");
let formDiv = document.getElementById("form");

submitButton.addEventListener("click", function(event){
    event.stopPropagation();
    event.preventDefault();
    highScores = JSON.parse(localStorage.getItem("highScores"));
    if(highScores === null){
        highScores = [];
    };
    let score = localStorage.getItem("currentScore");
    let initials = document.getElementById("initialForm").value;
    console.log(document.getElementById("initialForm").value);
    console.log("Score: ", score);
    highScores.push({name: initials, currentScore: score});
    console.log(JSON.stringify(highScores));
    localStorage.setItem("highScores", JSON.stringify(highScores));
    formDiv.remove();
});
//make an array of just the scores and order it
//for each score that matches the object in the array then put that into the high score table