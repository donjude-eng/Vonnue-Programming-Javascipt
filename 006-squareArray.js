///6 -Write a function to multiply elements of an array to itself ( find the square of each elements in the array)

const squareArrayElements = () => {
    sampleArray = ['1', '2', '3', '4', '5', '6'];
    for (i = 0; i < 6; i++) {
        sampleArray[i] = Math.pow(sampleArray[i], 2);
        console.log(sampleArray[i])
    }

}
squareArrayElements();