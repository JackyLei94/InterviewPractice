/*
 INPUT: "(4,2,3)(5,3)(2,8,5,4)" -> 9 * 8 * 19 = 1421
*/

// STEP 1
const tupleToProduct = string => {
  let product = 1;
  let sum;

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char === '(') {
      sum = 0;
    } else if (char === ',') {
      continue;
    } else if (char === ')') {
      product *= sum;
    } else {
      sum += Number(string[i]);
    }
  }

  return product;
}

// STEP 2
class Tuples {
  constructor(tuples) {
    this.tupleSums = this.init(tuples);
    this.cache = {};
  }

  init(tupleString) {
    let tuples = [];
    
    let sum;
    for (let i = 0; i < tupleString.length; i++) {
      let char = tupleString[i];
      if (char === '(') {
        sum = 0;
      } else if (char === ')') {
        tuples = [...tuples, sum];
      } else if (char === ',') {
        continue;
      } else {
        sum += Number(char);
      }
    }

    return tuples;
  }

  multiply() {
    if (this.cache.multiply) {
      return this.cache.multiply;
    }

    const product = this.tupleSums.reduce((acc, val) => {
      return typeof(acc) === 'undefined' ? val : acc *= val;
    });

    this.cache.multiply = product;

    return product;
  }

  subtract () {
    if (this.cache.subtract) {
      return this.cache.substract;
    }

    const difference = this.tupleSums.reduce((acc, val) => {
      return typeof(this.cache.subtract) === 'undefined' ? val : acc -= val;
    })

    return difference;
  }

}

let tuples = new Tuples("(4,2,3)(5,3)(2,8,5,4)");
let product = tuples.multiply();