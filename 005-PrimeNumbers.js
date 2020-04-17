const readline = require("readline-sync");

const checkPrimeNumber = (number) => {
    let primeNumber = true;
    for (let i = 2; i < number; i++) {
        if ((number % i) === 0) {
            primeNumber = false;
            break;
        }
    }
    console.log(`The number is ${primeNumber ? "prime" : "not prime"}`)
}

const number = readline.question(" Enter the number : ");
checkPrimeNumber(number);
