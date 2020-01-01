let highScores;
const submitButton = document.getElementById("submitInitials");

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
});
