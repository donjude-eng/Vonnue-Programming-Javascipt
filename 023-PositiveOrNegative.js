///23. Write a program to check a number is positive or negative.

const isPositive = (num) => {

    let result;

    if (num >= 0) {
        result = true;
    } else if (num < 0) {
        result = false;
    }
    return result;
}
var num;
num = parseInt(prompt("Enter a number"));
if (num != -1) {
    console.log(isPositive(num));
} else {
    console.log (false);
}