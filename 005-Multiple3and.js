const readline = require('readline-sync');

const printMultiple3and5 = (arrayElements) => {
    let sampleArray = arrayElements.split (',');
    for (let i = 0; i < sampleArray.length; i++); {
        if ((sampleArray[i] % 3 === 0) || (sampleArray[i] % 5 === 0)) {
            console.log(sampleArray[i]);
        }
    }
}

let arrayElements = readline.question("Enter the arrayElements ?");
printMultiple3and5(arrayElements);
