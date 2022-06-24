function readMatchDataForPlayerDismissal() {
    const fileReader = require("fs");
    matchObject = fileReader.readFileSync("../data/deliveries.csv")
    var deliveriesArray = matchObject.toString().split("\n");
    let headers = deliveriesArray[0].split(",")
    let bowlerIndex=8
    let superOverIndex=9
    let runIndex=17
    let bowlerData= {}
    for (let matchRow = 2; matchRow < deliveriesArray.length - 1; matchRow++){
        eachDelivery=deliveriesArray[matchRow].split(',')
        let bowler=eachDelivery[bowlerIndex]
        let superOver=parseInt(eachDelivery[superOverIndex])
        let totalRun= parseInt(eachDelivery[runIndex])
        if (superOver>0)
        {
          if(bowlerData[bowler]!=undefined)
          {
            bowlerData[bowler][0]+=1
            bowlerData[bowler][1]+=totalRun
          }
          else{
            bowlerData[bowler]=[1,totalRun]
          }
        }

    }
   var bestBowler=""
    var bestBowlerIndex=0;
    for(let i in bowlerData)
    {
        
        bestBowler=Object.keys(bowlerData).reduce(function(a, b){ return bowlerData[a][1]/bowlerData[a][0] < bowlerData[b][1]/bowlerData[b][1] ? a : b });
    }
        
    console.log(bestBowler)

    //let json = JSON.stringify(playerDismissal);
    //fileReader.writeFileSync('playerDismissal.json', json)*/
  
  
}
  
  
  readMatchDataForPlayerDismissal()