const hand = [];
for (let roll = 0; roll < 3; roll++) {
    hand.push(randFace());
}

let winnings = 0;
for (let die=0; hand.length; die++){
    let face = hand[die];
    if (bets[face] > 0) winnings = winnings[face];
}
funds = funds + winnings;