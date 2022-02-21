const cart = [
    { name: "Widget", price: 9.95 },
    { name: "Gadget", price: 22.95 }
    ];

const names = cart.map(x => x.name);
console.log(names);

const prices = cart.map(x => x.price);
console.log(prices);

const discountPrices = prices.map(x => x*0.8);
console.log(discountPrices);

const lcNames = names.map(x => x.toLowerCase());
console.log(lcNames);

const items = names;
const items_prices = prices;

const cart2 = items.map((x, i) => ({name: x, prices: items_prices[i], index: i}));
console.log(cart2);