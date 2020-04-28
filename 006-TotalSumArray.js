///6. Find the sum of elements in a given array. Array should be an input to the program.


const readline = require('readline-sync');

const sumElementOfAnArray = () => {
    let sampleArray = arrayElements.split(',');
    let sum = 0
    for (i = 0; i < 5; i++) {
        sum = parseInt(sampleArray[i]) + sum;

    }
    console.log(sum);

}

let arrayElements = readline.question("Enter the arrayElements ?");
sumElementOfAnArray(arrayElements);