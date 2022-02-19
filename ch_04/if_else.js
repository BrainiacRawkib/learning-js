funds = 50

// don't do this
if (funds > 1) {
    console.log("There's money left!")
    console.log("That means keep playing!")
}else
    console.log("I'm broke! Time to quit.")

// or this
if (funds > 1 )
    console.log("There's money left! Keep playing!")
else {
    console.log("I'm broke!");
    console.log('Time to quit.')
}

const bets = {crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0};

let totalBet = rand(1, funds);
if (totalBet === 7) {
    totalBet = funds;
    bets.heart = totalBet;
    console.log(totalBet, bets.heart)
} else {
    //distribute total bet
}
funds = funds - totalBet;