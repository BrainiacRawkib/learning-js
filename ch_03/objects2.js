const sam1 = {
    name: 'Sam',
    age: 4
};

const sam2 = {name: 'Sam', age: 4};

const sam3 = {
    name: 'Sam',
    classification: {
        kingdom: 'Anamalia',
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subfamily: 'Felinae',
        genus: 'Felis',
        species: 'catus',
    },
};

console.log(sam1);
console.log(sam2);
console.log(sam3);

console.log(sam3.classification.family);
console.log(sam3['classification'].family);
console.log(sam3['classification']['family']);

sam3.speak = function () {return 'Meow!'}
sam3.meow = () => {return 'Meoooow!'}

console.log(sam3.speak());
console.log(sam3.meow());

delete sam3.classification.family;
delete sam3.speak;

console.log(sam3.classification.family);
console.log(sam3.speak);