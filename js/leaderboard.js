if (!sessionStorage.length == 0) {
    let user = document.getElementById('user');

    let playerId = user.innerHTML;
    let playerScore = sessionStorage.getItem(playerId);

    let playersCol = document.getElementsByClassName('playerName');
    let playersList = [... playersCol];
    let players = []
    for (let i of playersList) {
        players.push(i.innerHTML);
    }

    let topScoresCol = document.getElementsByClassName('playerScore');
    let topScoresList = [... topScoresCol];
    let topScores = [];
    for (let i of topScoresList) {
        topScores.push(parseInt(i.innerHTML));
    }


    let playerScores = Object.assign(...players.map((player, i) => ({[player] : topScores[i]})));

    if (players.includes(playerId)) {
        
    }

}

let user = document.getElementById('user');
user.style.textTransform = "none";

let playerId = user.innerHTML;
let playerScore = sessionStorage.getItem(playerId);

let playersCol = document.getElementsByClassName('playerName');
let playersList = [... playersCol];
let players = []
for (let i of playersList) {
    players.push(i.innerHTML);
}

let topScoresCol = document.getElementsByClassName('playerScore');
let topScoresList = [... topScoresCol];
let topScores = [];
for (let i of topScoresList) {
    topScores.push(parseInt(i.innerHTML));
}
// Code to get a shallow copy of an array and reverse it while working on each element
topScores.slice().reverse().forEach(x => console.log(x))

let playerScores = Object.assign(...players.map((player, i) => ({[player] : topScores[i]})));
console.table(playerScores);

if (players.includes(playerId)) {
    if (playerScores.playerId < sessionStorage.getItem(playerId)) {
        playerScores.playerId = sessionStorage.getItem(playerId)
        console.log("Score is updated");
    } else {
        console.log("You didnt beat your highscore")
    }
} else {
    topScores.forEach(x => {
        if (condition) {
            sessionStorage.getItem(playerId);
        }
    });
    console.log("Player doesnt have a high score")
}