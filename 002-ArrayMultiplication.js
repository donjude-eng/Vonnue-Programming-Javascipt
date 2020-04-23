/// Write a function to print all the elements whose index is a multiple of 2.
const readline = require('readline-sync');

const printElements = () => {
    let sampleArray = arrayElements.split(',');
    for (i = 1; i < sampleArray.length; i++) {
        if ((i % 2) === 0) {
            console.log(sampleArray[i])
        } else {
            continue;
        }
    }
}

let arrayElements = readline.question("Enter the arrayElements ?");
printElements(arrayElements);
