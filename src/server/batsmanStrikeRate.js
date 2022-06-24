function readMatchDataForstrikeRate() {
    const fileReader = require("fs");
    matchObject = fileReader.readFileSync("../data/matches.csv")
    var matchArray = matchObject.toString().split("\n");
    matchId={}
    idIndex=0
    seasonIndex=1
    for(let match=1;match<matchArray.length-1;match++)
    {
        eachMatch=matchArray[match].split(',')
        let id= parseInt(eachMatch[idIndex])
        let season=eachMatch[seasonIndex]
        if(matchId[season]!=undefined){
            matchId[season].add(id)
        }
        else{
            matchId[season]=new Set()
            matchId[season].add(id)
        }
    }
    const fileReader = require("fs");
    matchObject = fileReader.readFileSync("../data/deliveries.csv")
    var deliveriesArray = matchObject.toString().split("\n");
    let headers = deliveriesArray[0].split(",")
    let batsmanIndex = 6;
    let runIndex =18;
    let batsmanData= {};
    for (let matchRow = 2; matchRow < deliveriesArray.length - 1; matchRow++){
        eachDelivery=deliveriesArray[matchRow].split(',')
        let nuns=eachDelivery[runIndex]
        let batsman=eachDelivery[batsmanIndex]
        let id = eachDelivery[idIndex]
        let season=0
        for(let year in matchId)
        {
            if(id in matchId[year])
            {
                season=year
            }
        }
        if (dismissal.length > 0 && dismissal!= 'run out')
        {
            if(playerDismissaldata[batsman]!== undefined)
            {
                if(playerDismissaldata[batsman][bowler]!== undefined)
                playerDismissaldata[batsman][bowler]+=1
                else
                playerDismissaldata[batsman][bowler]=1
            }
        
        else{
            playerDismissaldata[batsman]={}
            playerDismissaldata[batsman][bowler]=1
        }
    }

    }
    let playerDismissal=[]
    for(let i in playerDismissaldata)
    {
        obj=playerDismissaldata[i]
        let max_key=Object.keys(obj).reduce(function(a, b){ return obj[a] > obj[b] ? a : b });
        playerDismissal.push([i,max_key,obj[max_key]]) 
    }
    let json = JSON.stringify(playerDismissal);
    fileReader.writeFileSync('playerDismissal.json', json)*/
  
  
}
  
  
  readMatchDataForstrikeRate()