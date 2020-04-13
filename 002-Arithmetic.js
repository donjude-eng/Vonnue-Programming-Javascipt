  
const add = (a , b) =>{
    let sum = a + b;
    console.log("The sum is", sum);
}

const substract = (b,c) =>{
    let diff = b - c;
    console.log("The difference is", diff);
}
const multiply = (d,e) =>{
    let product = d * e;
    console.log("The product is", product);
}
const devide = (f ,g ) =>{
    let quotient = f / g;
    console.log("The quotient is", quotient);
}

const num1 = prompt("Enter the first number");
const num2 = prompt("Enter the second number");
add(num1, num2);
substract(num1, num2);
multiply(num1, num2);
devide(num1, num2);