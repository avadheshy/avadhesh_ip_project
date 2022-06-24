function readMatchDataForPlayer() {
    const fileReader = require("fs");
    matchObject = fileReader.readFileSync("../data/matches.csv")
    var matchArray = matchObject.toString().split("\n");
    let headers = matchArray[0].split(",")
    playeOfTheMatchIndex = 13
    seasonIndex = 1
    let playerOfTheMatchData= {}
    for (let matchRow = 1; matchRow < matchArray.length - 1; matchRow++) {
      let eachMatchData = matchArray[matchRow].split(",")
      let playerOfTheMatch = eachMatchData[playeOfTheMatchIndex]
      let season = eachMatchData[seasonIndex]

      if (playerOfTheMatchData[season] !== undefined)
      {
        if(playerOfTheMatchData[season][playerOfTheMatch]!==undefined)
        {
            playerOfTheMatchData[season][playerOfTheMatch]+=1
            console.log(playerOfTheMatchData[season][playerOfTheMatch])
        }
        else
        {
            playerOfTheMatchData[season][playerOfTheMatch]+=1
            
        }

      }
      else{
            playerOfTheMatchData[season]={playerOfTheMatch:1}
            console.log(playerOfTheMatchData[season][playerOfTheMatch])
      }
      
    }
 // for(let i in playerOfTheMatchData){
    //console.log(i,playerOfTheMatchData[i])
  //}
    //headers = ['teamName', 'totalWinnings']
    //let json = JSON.stringify(countOfTeamsMatchWinningsWithTossWinning);
    //fileReader.writeFileSync('teamWinningCount.json', json)
  
  }
  
  
  readMatchDataForPlayer()