//11 Write a program that prints a multiplication table for numbers up to 12.

const multiplicationTable = () => {
    for (let i = 1; i <= 12; i++) {
        for (let j = 1; j <= 10; j++) {
            //Template literals
            console.log(` ${j} * ${i} = ${i * j}`);
        }
        console.log("\n");
    }
}

multiplicationTable();