///7. Declare 2 arrays of the same size and print the values of both using one for loop.

const readline = require('readline-sync');
const sameSizeArray = (arrayElements) => {
    let sampleArray1 = arrayElements.split(',');
    let sampleArray2 = arrayElements.split(',');
    for (let i = 0; k < sampleArray1.length; i < sampleArray2.length; i++) {

        console.log(sampleArray1[i], sampleArray2[i]);
    }

}
let sampleArray1 = readline.question("Enter the first arrayElements ?");
let sampleArray2 = readline.question("Enter the second arrayElements ?");
sameSizeArray(arrayElements);
