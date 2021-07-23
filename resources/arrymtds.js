const prices = [3.7,4.7,4.3,4,3.8,4.8,2];
const nflTeamNames = ['New England Patriots', 'Pittsburgh Steelers', 'Minnisota Vikings', 'Green Bay Packers', 'Las Vegas Raiders', 'Denver Broncos'];
const nflWins = [
   { clubName: 'New England Patriots', won:6 }, 
   { clubName: 'Pittsburgh Steelers',  won:6 },
   { clubName: 'Dallas Cowboys', won:5 }, 
   { clubName: 'San Francisco 49ers', won:5 },
   { clubName: 'Green Bay Packers', won:4 },
   { clubName: 'New York Giants', won:4 },
   { clubName: 'Denver Broncos', won:3 }
];
//sort 
//console.log(nflTeamNames.sort().reverse());
//sorting numbers option 1
const orderedPrices = prices.sort((a,b) => {
    if(a>b){
        return -1;
    } else if (a<b){
        return 1;
    }else{
        return 0;
    }
}); 
console.log(orderedPrices);
//option 2
// const orderedPrices = prices.sort((a,b) =>a-b);
// console.log(orderedPrices);

//find methods
const findPrice = prices.find(price=>price > 4.7);
//reduce methods
const total = prices.reduce((acc, cv)=>{
   acc += cv;
   return (acc);

}, 1000);
    //map methods
    const wonMaps = nflWins.map((win,index)=>{
        let winner = "";
        if(win.won>4){
            winner = `Wow!!! ${win.clubName} wins super bowl ${win.won} times.`
        } else {
            winner = `${win.clubName} wins ${win.won} times.`
        }
        
        return (winner);
    });
    //filter methods
   const resultFilter = nflTeamNames.filter((team)=>{
        return team.length>16;

    });
    const topsFilter = nflWins.filter((tops)=>{
        return tops.won > 4;

    });

