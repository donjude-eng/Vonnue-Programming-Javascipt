//3. Write a function to replace all the elements of an array with 0.


const readline = require('readline-sync');

const replaceArrayElementsWithZero = () => {
    let sampleArray = arrayElements.split (',');
    for (i=0 ; i<sampleArray.length ; i++) {
        sampleArray [i] = sampleArray[i] * 0 ;
    }
    console.log (sampleArray);

}

let arrayElements = readline.question("Enter the arrayElements ?");
replaceArrayElementsWithZero ();
