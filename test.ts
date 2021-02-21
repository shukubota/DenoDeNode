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
console.log(wholeSalePrice2);


const sleep = async () => setTimeout(() => console.log('aaaa'), 1000);

const list = [1, 2, 3];

const promiseList = [];
list.forEach(async value => {
  console.log('bbbbbb')
  console.log(value)
  promiseList.push(sleep)
  // sleep();
});

// Promise.all(promiseList);
console.log('88888888')

type Props = number[];
class TestArray extends Array {
  constructor(props: number[]) {
    super();
    // return props;
  }
}

const testArray: TestArray = new TestArray([1, 2, 3]);
console.log(testArray)
// console.log(testArray.isArray())
class Test2Array {
  constructor(props: any) {
    return props;
  }
}

// const b = new TestArray(1);

const c = new Array(a)
// console.log(c)
// console.log(c.length)
// console.log(c[1])

// const _cc = (defaultValue: any, model: any) => ({
//   class: model,
//   defaultValue,
// });

// const testmodel = _cc(new TestArray, [1, 2]);
// console.log(testmodel)
// console.log(b)
// console.log(c.length)

const num: | number | string = 1;

console.log(num);

class UserName extends String {
  constructor(params: string) {
    super(params);
    // 5文字以内
    if (params.length > 5) {
      throw new Error('5文字以内にしてください');
    }
  }

　isEqual(params: UserName) {
    console.log(this.toString())
    console.log(params.toString())
    return this.toString() === params.toString();
  }
}

const peater = new UserName('aaa');
const tom = new UserName('aaa');
// peater.isEqual(tom)
console.log(peater.isEqual(tom));
// console.log('aaa' === 'aaa')