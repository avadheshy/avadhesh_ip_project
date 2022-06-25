function readMatchDataForPlayer() {
    const fileReader = require("fs");
    matchObject = fileReader.readFileSync("../data/matches.csv")
    var matchArray = matchObject.toString().split("\n");
    let headers = matchArray[0].split(",")
    let playeOfTheMatchIndex = 13
    let seasonIndex = 1
    let playerOfTheMatchData= {}
    for (let matchRow = 1; matchRow < matchArray.length - 1; matchRow++) {
      let eachMatchData = matchArray[matchRow].split(",")
      let playerOfTheMatch = eachMatchData[playeOfTheMatchIndex]
      let season = eachMatchData[seasonIndex]
  
    
      if (playerOfTheMatchData[season] !== undefined)
      {
        if(playerOfTheMatchData[season][playerOfTheMatch]!== undefined)
        {
            playerOfTheMatchData[season][playerOfTheMatch]+=1

        }
        else
        {
            playerOfTheMatchData[season][playerOfTheMatch]=1
            
        }

      }
      else{
            playerOfTheMatchData[season]={}
            playerOfTheMatchData[season][playerOfTheMatch]=1

      }
      
    }
    let playes_name={}
    for(let i in playerOfTheMatchData)
    {
      obj=playerOfTheMatchData[i]
      let max_key=Object.keys(obj).reduce(function(a, b){ return obj[a] > obj[b] ? a : b });
      //playes_name.push([i,max_key,obj[max_key]])
      playes_name[i]={}
      playes_name[i][max_key]=obj[max_key]
    }
    let json = JSON.stringify(playes_name);
    fileReader.writeFileSync('../public/manOfTheMatch.json', json)
  
  }
  
  
  readMatchDataForPlayer()
