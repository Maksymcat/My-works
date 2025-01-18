class Calculator {
  add(one, two) {
    return one + two;
  }
  subtract(one, two) {
    return one - two;
  }
  multiply(one, two) {
    return one * two;
  }
  divide(one, two) {
    return one / two;
  }
}

const calc = new Calculator();

console.log(calc.add(5, 3)); // 8

console.log(calc.subtract(10, 4)); // 6

console.log(calc.multiply(3, 6)); // 18

console.log(calc.divide(8, 2)); // 4
