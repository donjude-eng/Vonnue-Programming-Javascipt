///6 -Write a function to multiply elements of an array to itself ( find the square of each elements in the array)

const readline = require('readline-sync');

const squareArrayElements = (arrayElements) => {
    let sampleArray = arrayElements.split(',');
    for (let i = 0; i < sampleArray.length; i++) {
        sampleArray[i] = Math.pow(sampleArray[i], 2);
        console.log(sampleArray[i])
    }

}

let arrayElements = readline.question("Enter the arrayElements ?");
squareArrayElements(arrayElements);
