function readMatchDataForPlayerDismissal() {
    const fileReader = require("fs");
    matchObject = fileReader.readFileSync("../data/deliveries.csv")
    var deliveriesArray = matchObject.toString().split("\n");
    let headers = deliveriesArray[0].split(",")
    let batsmanIndex = 6
    let bowlerIndex=8
    let dismissalIndex =18
    let dismissalType=19
    let playerDismissaldata= {}
    for (let matchRow = 2; matchRow < deliveriesArray.length - 1; matchRow++){
        eachDelivery=deliveriesArray[matchRow].split(',')
        let bowler=eachDelivery[bowlerIndex]
        let batsman=eachDelivery[batsmanIndex]
        let dismissal=eachDelivery[dismissalType]
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
    fileReader.writeFileSync('playerDismissal.json', json)
  
  
}
  
  
  readMatchDataForPlayerDismissal()