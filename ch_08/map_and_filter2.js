const cards = [];
for (let suit of ['H', 'C', 'D', 'S']) {
    for (let value=1; value <=13; value++) {
        cards.push({suit, value});
    }
}

console.log(cards.filter(c => c.value === 2));

console.log(cards.filter(c => c.suit === 'D'));

console.log(cards.filter(c => c.value > 10));

console.log(cards.filter(c => c.value > 10 && c.suit === 'H'));