import Pricing from './4-pricing';
import Currency from './3-currency';

const p = new Pricing(100, new Currency("EUR", "Euro"));
console.log(p);
console.log(p.displayFullPrice());

// const l = new Pricing(100, "Rands");
// console.log(l.currency)