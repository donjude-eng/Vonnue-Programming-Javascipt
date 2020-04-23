///Print the array in reverse order

const readline = require('readline-sync');

const reverseArray = (arrayElements) => {
    let sampleArray = arrayElements.split(','); 
    for (let i = sampleArray.length; i >=0; i--) {
        console.log(sampleArray[i])

    }
}
let arrayElements = readline.question("Enter the arrayElements ?");
reverseArray(arrayElements);

