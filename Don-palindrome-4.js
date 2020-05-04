const readline = require ("readline-sync");

const palindromeCheck = (teststr) => {
    const stringLength = testStr.length;
    const roundedLength = Math.round(stringLength / 2);
    let palindrome = true;
    for (let i = 0; i <= roundedLength; i++) {
        if (testStr[i] !== testStr[stringLength - 1 - i]) {
            palindrome = false;
            break;
        }
    }
    console.log(`The word ${palindrome ? "palindrome" : "not palindrome"}`);
}
const testStr = readline.question(" Enter the string : ");
palindromeCheck(testStr);
