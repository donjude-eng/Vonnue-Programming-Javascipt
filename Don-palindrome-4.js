const readline = require ("readline-sync");

const palindromeCheck = (lineTest) => {
    const stringLength = lineTest.length;
    const roundedLength = Math.round(stringLength / 2);
    let palindrome = true;
    for (let i = 0; i <= roundedLength; i++) {
        if (lineTest[i] !== lineTest[stringLength - 1 - i]) {
            palindrome = false;
            break;
        }
    }
    console.log(`The word ${palindrome ? "palindrome" : "not palindrome"}`);
}
const lineTest = readline.question(" Enter the string : ");
palindromeCheck(lineTest);
