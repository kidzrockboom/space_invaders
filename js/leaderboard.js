ScoreBoard()

function ScoreBoard () {
    let table = document.getElementById('table');
    users = Object.keys(localStorage);
    let scores = [];
    
    for (let i = 0; i < users.length; i++) {
        user = JSON.parse(localStorage.getItem(users[i]));
        let player = [users[i], user.userHighscore]
        scores.push(player);
    }

    let sortedScores = scores.sort((a, b) => a[1] - b[1]);

    if (sortedScores.length > 7) {
        let topSeven = sortedScores.reverse().splice(0,7)
        topSeven.reverse();
        for (let i = 0; i < topSeven.length; i++) {
            let row = table.insertRow(0);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.innerHTML = topSeven[i][0];
            for (let j = 0; j < 2; j++) {
                cell2.innerHTML = topSeven[i][j];
            }
            
        }
    } else {
        for (let i = 0; i < sortedScores.length; i++) {
            let row = table.insertRow(0);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.innerHTML = sortedScores[i][0];
            for (let j = 0; j < 2; j++) {
                cell2.innerHTML = sortedScores[i][j];
            }
            
        }
    }

    
}