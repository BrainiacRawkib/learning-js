const arr = [5, 7, 2, 4, 6];
const sum = arr.reduce((a, x) => a += x, 0);

console.log(sum);

const words = ["Beachball", "Rodeo", "Angel",
    "Aardvark", "Xylophone", "November", "Chocolate",
    "Papaya", "Uniform", "Joker", "Clover", "Bali"];
const alphabetical = words.reduce((a, x) => {
        if(!a[x[0]])
            console.log(a[x[0]]);
            console.log(x);
            console.log(a);
            a[x[0]] = [];
        a[x[0]].push(x);
        return a; }, {});
console.log(alphabetical);