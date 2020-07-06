///34-Program to reverse the given number

const reverseNumber = (number) => {
    let numberToString = String(number);
    let stringLength = numberToString.length;
    let change = [];
    for (let i = 0; i < stringLength; i++) {
        change[i] = numberToString[stringLength - 1 - i];
    }
    return change;
}
console.log(reverseNumber(256789));