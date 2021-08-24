// const num = (num1, num2) => num1 + num2
// const sum = (25, 26)
 // console.log(sum)

const maltiply = (num1, num2, num3) => num1 * num2 * num3;
const result = maltiply(4, 12, 3)
// console.log(result)

const num = num => num *5
const fiveTimes = num(10)
console.log(fiveTimes)

const getName = () => 'Brandon Sam';
const name = getName()
console.log(name);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}

const total = doMath(12, 5);
console.log(total);