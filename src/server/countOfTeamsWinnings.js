function readMatchData() {
  const fileReader = require("fs");
  matchObject = fileReader.readFileSync("../data/matches.csv")
  var matchArray = matchObject.toString().split("\n");
  let headers = matchArray[0].split(",")
  matchTossIndex = 6
  matchWinningTeamIndex = 10
  let countOfTeamsMatchWinningsWithTossWinning = {}
  for (let matchRow = 1; matchRow < matchArray.length - 1; matchRow++) {
    let eachMatchData = matchArray[matchRow].split(",")
    let tossWinnerTeam = eachMatchData[matchTossIndex]
    let matchWinnerTeam = eachMatchData[matchWinningTeamIndex]
    if (matchWinnerTeam == tossWinnerTeam) {
      if (countOfTeamsMatchWinningsWithTossWinning[matchWinnerTeam] != undefined)
        countOfTeamsMatchWinningsWithTossWinning[matchWinnerTeam] += 1
      else
        countOfTeamsMatchWinningsWithTossWinning[matchWinnerTeam] = 1
    }

  }

  headers = ['teamName', 'totalWinnings']
  let json = JSON.stringify(countOfTeamsMatchWinningsWithTossWinning);
  fileReader.writeFileSync('teamWinningCount.json', json);
}


readMatchData()
