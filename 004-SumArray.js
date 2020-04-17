//Write a function to find the sum of all elements of an array.

const sumElementOfAnArray = () => {
    sampleArray = ['1', '2', '3', '4', '5'];
    let sum = 0
    for (i = 0; i < 5; i++) {
        sum = parseInt(sampleArray[i]) + sum;

    }
    console.log(sum);

}
sumElementOfAnArray ();