// returns a random integer in the range [m, n] (inclusive)
function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

// randomly returns a string representing one of the six
// Crown and Anchor faces
function randFace() {
    return ['crown', 'anchor', 'heart', 'spade', 'club', 'diamond'][rand(0, 5)];
}

console.log(randFace())