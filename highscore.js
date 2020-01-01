let highScores;
let scoreList = [];
const submitButton = document.getElementById("submitInitials");
let formDiv = document.getElementById("form");
let table = document.getElementById("highScoreTable");

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
    for (var i = 0; i < highScores.length; i++){
        //only add non duplicated numbers
        if (scoreList.indexOf(highScores[i].currentScore) === -1){
            scoreList.push(highScores[i].currentScore);
        }
        scoreList.sort();
    };
    console.log(scoreList);
    for (var j = scoreList.length-1; j >= 0; j--){
        for(var k = 0; k < highScores.length; k++){
            console.log("Score List: " + scoreList[j]);
            console.log("Current Score: " + highScores[k].currentScore);
            if(highScores[k].currentScore === scoreList[j]){
                let row = document.createElement("tr");
                let tableName = document.createElement("td");
                tableName.textContent = highScores[k].name;
                let tableScore = document.createElement("td");
                tableScore.textContent = highScores[k].currentScore;
                row.appendChild(tableName);
                row.appendChild(tableScore);
                table.appendChild(row);
            };
        };
    };
});

//for each score that matches the object in the array then put that into the high score table


//After entering submit go to High Score screen
//display high score in correct order, all high scores in an array and use JSON.stringify...
//Create Go Back button (restart quiz?) and Clear Highscores button
//clear highscores button will clear local storage