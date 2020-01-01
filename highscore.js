let highScores;
let scoreList = [];
const submitButton = document.getElementById("submitInitials");
const clearButton = document.getElementById("clearButton");
const restartButton = document.getElementById("restartButton");
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

    //generates title for the table
    let titleRow = document.createElement("tr");
    let titleTableName = document.createElement("td");
    titleTableName.setAttribute("style", "border: 1px solid black; padding: 10px; font-weight: bold");
    titleTableName.textContent = "Initials";
    let titleTableScore = document.createElement("td");
    titleTableScore.setAttribute("style", "border: 1px solid black; padding: 10px; font-weight: bold");
    titleTableScore.textContent = "Score";
    titleRow.appendChild(titleTableName);
    titleRow.appendChild(titleTableScore);
    table.appendChild(titleRow);

    //generates rest of table with scores in order
    for (var j = scoreList.length-1; j >= 0; j--){
        for(var k = 0; k < highScores.length; k++){
            console.log("Score List: " + scoreList[j]);
            console.log("Current Score: " + highScores[k].currentScore);
            if(highScores[k].currentScore === scoreList[j]){
                let row = document.createElement("tr");
                let tableName = document.createElement("td");
                tableName.setAttribute("style", "border: 1px solid black; padding: 10px");
                tableName.textContent = highScores[k].name;
                let tableScore = document.createElement("td");
                tableScore.setAttribute("style", "border: 1px solid black; padding: 10px");
                tableScore.textContent = highScores[k].currentScore;
                row.appendChild(tableName);
                row.appendChild(tableScore);
                table.appendChild(row);
            };
        };
    };
});

clearButton.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.clear();
    table.remove();
});

restartButton.addEventListener("click", function(event){
    event.preventDefault();
    window.location = 'index.html';
});

//make sure to edit read me!