//8.Write a program to compare the current item in the array to the next item and print if they are equal or not.
const readline = require('readline-sync');

const equalItem = (arrayElements) => {
    let sampleArray = arrayElements.split(',');
    for (let i = 1; i < sampleArray.length; i++) {
        if (sampleArray[i] === sampleArray[i - 1]) {
            console.log(sampleArray[i], sampleArray[i - 1]);
        }
    }
}

let arrayElements = readline.question("Enter the arrayElements ?");
equalItem(arrayElements);