// This function return the name of the winner. The Compitition aarray represent
// the match between teams.The first element is Home team and
// The result array represents the point won by the home team.There is no draw
//Task is to find the winner of the tournament



function tournamentWinner(competitions, results) {
	
	let winnerTeams = [];
    let teams = [];
	
	for (let i = 0;i<results.length;i++){
		
		if(results[i]===1) winnerTeams.push(competitions[i][0]);
		else winnerTeams.push(competitions[i][1]);

        for (let j = 0;j<2;j++){

            if (!teams.includes(competitions[i][j])){
                teams.push(competitions[i][j]);
            }

        }
		
	}

    let initialCount = Array(teams.length).fill(0);
    for (let i = 0;i<winnerTeams.length;i++){
        let x = teams.indexOf(winnerTeams[i]);
        initialCount[x]++;
    }

    let indexMax = initialCount.indexOf(Math.max(...initialCount));


	
	return teams[indexMax] ;
  // Write your code here.
  //return '';
}

// Do not edit the line below.

console.log(tournamentWinner([
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
  ],[0, 0, 1]));
