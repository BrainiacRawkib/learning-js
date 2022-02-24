// previous examples with iife
// var i;
// for (i=5; i>0; i--) {
//     (function (i) {
//         setTimeout(function () {
//             console.log(i === 0 ? 'go!' : i);
//         }, (5-i)*1000);
//     })(i);
// }

for (let i=5; i>=0; i--) {
    setTimeout(function () {
        console.log(i === 0 ? 'go!' : i)
    }, (5-i)*1000);
}