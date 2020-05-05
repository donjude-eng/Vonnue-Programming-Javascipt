//31 write a program to Sum of digits of a number

const sumOfDigits = (number) => {
    let sum = 0;
    let numberToString = String(number);
    for (let i = 0; i < numberToString.length; i++) {
        sum = sum + parseInt(numberToString[i]);
    }
    return sum;
}

console.log(sumOfDigits(52565));