///29-Greatest of three numbers

const Greatest_of_three_numbers = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else if (num3 > num1 && num3 > num1) {
        return num3;
    }
}

let num1 = 100
let num2 = 200
let num3 = 300
console.log(Greatest_of_three_numbers(num1, num2, num3));