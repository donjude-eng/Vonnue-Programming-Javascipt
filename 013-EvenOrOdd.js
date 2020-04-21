const readline = require("readline-sync");

const oddOrEvenCheck = (number) => {
    if (number%2 === 0) {
        console.log("The number is even ")
    } else {
        console.log("The number is odd ")
    }
}

const number = readline.question("Enter the number : ");
oddOrEvenCheck(number);