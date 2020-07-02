const a = [1,2,3]

for (const cell of a) {
  console.log(cell);
  if (cell === 1) {
    console.log('ok')
    continue;
  }
  console.log('bbbbbb')
}


class WholeSalePrice extends Number {

};
class Price extends Number {
  greaterThan(newPrice: Number) {
    console.log(newPrice)
    return this > newPrice;
  }
};

const price = new Price(3000);
const wholeSalePrice = new WholeSalePrice(2000);
const wholeSalePrice2 = new WholeSalePrice(price);


console.log(price.greaterThan(wholeSalePrice))

console.log(price)
console.log(wholeSalePrice);
console.log(wholeSalePrice2)
