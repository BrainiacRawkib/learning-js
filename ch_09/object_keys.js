const SYM = Symbol();

const o = {a: 1, b: 2, c: 3, [SYM]: 4};
Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`))
console.log(Object.keys(o));
console.log(Object.values(o));

const p = {apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5, };
Object.keys(p)
    .filter(prop => prop.match(/^x/))
    .forEach(prop => console.log(`${prop}: ${p[prop]}`));