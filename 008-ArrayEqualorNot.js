//8.Write a program to compare the current item in the array to the next item and print if they are equal or not.

const equalItem = () => {
    sampleArray = ['1', '3', '3', '4', '4'];
    for (i = 1; i < 5; i++) {
        if (sampleArray[i] === sampleArray[i - 1]) {
            console.log(sampleArray[i], sampleArray[i - 1]);
        }
    }
}
equalItem();