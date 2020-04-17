/// Write a function to print all the elements whose index is a multiple of 2.

const printElements = () => {
    sampleArray = ['1', '2', '3', '4', '5', '6'];
    for (i = 1; i < 6; i++) {
        if ((i % 2) === 0) {
            console.log(sampleArray[i])
        } else {
            continue;
        }
    }
}

printElements();