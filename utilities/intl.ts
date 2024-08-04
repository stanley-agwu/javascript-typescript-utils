const amount = 546.9875454;
const amount2 = 1.998765;
const amount3 = 2.0000198764;

const currencyFormatter = new Intl.NumberFormat(undefined, { currency: 'USD', style: 'currency'});
const formatter = (amount: number) => currencyFormatter.format(amount);

console.log(formatter(amount));
console.log(formatter(amount2));
console.log(formatter(amount3));

const formatNumberToMaxOneDecimalDigits = (val: number) => new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 1,
}).format(val);

const displayNumber = formatNumberToMaxOneDecimalDigits(148000123.999);
const displayNumber1 = formatNumberToMaxOneDecimalDigits(148444123.999);
console.log({ displayNumber, displayNumber1 });