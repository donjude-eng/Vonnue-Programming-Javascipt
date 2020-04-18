///7. Declare 2 arrays of the same size and print the values of both using one for loop.

const sameSizeArray = () => {
    let sampleArray1 = ['1', '2', '3', '4', '5'];
    let sampleArray2 = ['6', '7', '8', '9', '10'];
    for (i = 0; i < 5; i++) {
        console.log(sampleArray1[i], sampleArray2[i]);
    }

}
sameSizeArray();