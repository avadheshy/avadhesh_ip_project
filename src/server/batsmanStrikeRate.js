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
        if(matchId[season]!==undefined){
            matchId[season].push(id)
        }
        else{
            matchId[season]=[]
            matchId[season].push(id)
        }
    }
    const fileReader1 = require("fs");
    matchObject = fileReader1.readFileSync("../data/deliveries.csv")
    var deliveriesArray = matchObject.toString().split("\n");
    let headers = deliveriesArray[0].split(",")
    let batsmanIndex = 6;
    let runIndex =17;
    let batsmanData= {};
    for (let matchRow = 2; matchRow < deliveriesArray.length - 1; matchRow++){
        eachDelivery=deliveriesArray[matchRow].split(',')
        let runs=parseInt(eachDelivery[runIndex])
        let batsman=eachDelivery[batsmanIndex]
        let id = parseInt(eachDelivery[idIndex])
        let season=0
      
        for(const year of Object.keys(matchId))
        { 
    
            if( matchId[year].includes(id))
            {
                season=year        
            }
            
        }
        console.log(season)
        if(batsmanData[season]!=undefined)
        {
            if(batsmanData[season][batsman]!=undefined)
            {
                batsmanData[season][batsman][0]+=1
                batsmanData[season][batsman][1]+=runs
            }
            else{
                batsmanData[season][batsman]=[1,runs]
            }
         

        }
        else
        {
            batsmanData[season]={}
            batsmanData[season][batsman]=[1,runs]
        }
    }


    //console.log( batsmanData)
    /*let json = JSON.stringify(playerDismissal);
    fileReader.writeFileSync('playerDismissal.json', json)*/
  
  
}
  
  
  readMatchDataForstrikeRate()