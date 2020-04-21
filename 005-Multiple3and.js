const printMultiple3and5 = () => {
    let sampleArray = ['1', '2', '3', '4', '5', '6', '10'];
    for (let i = 0; i < sampleArray.length; i++); {
        if ((sampleArray[i] % 3 === 0) || (sampleArray[i] % 5 === 0)) {
            console.log(sampleArray[i]);
        }
    }
}
printMultiple3and5();