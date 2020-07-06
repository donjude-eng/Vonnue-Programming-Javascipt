///28-Greatest of two numbers

const Greatest_of_two_numbers = (num1, num2) => {
    if (num1 > num2)
        return num1;
    else
        return num2;
}

let num1 = 100
let num2 = 200
console.log(Greatest_of_two_numbers(num1, num2));