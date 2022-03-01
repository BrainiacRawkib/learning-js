const arr = [3, 1.5, 9, 2, 5.2];

arr.sum = function () {return this.reduce((a, x) => a+x);}
arr.avg = function () {return this.sum() / this.length;}

Object.defineProperty(arr, 'sum', {enumerable: false});
Object.defineProperty(arr, 'avg', {enumerable: false});

// Or

Object.defineProperty(arr, 'sum', {
    value: function(){return this.reduce((a, x) => a+x)},
    enumerable: false
});

Object.defineProperty(arr, 'avg', {
    value: function(){return this.sum() / this.length;},
    enumerable: false
});

// Or using Object.defineProperties
// Object.defineProperties(arr,
//     sum: {
//     value: function() { return this.reduce((a, x) => a+x); },
//     enumerable: false
// }),
// avg: {
//     value: function() { return this.sum()/this.length; },
//     enumerable: false
// })
// );
console.log(Object.isFrozen(arr));