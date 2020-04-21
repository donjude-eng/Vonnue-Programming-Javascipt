
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
    const str =prompt ("Enter the word?")
    console.log(`The string is ${palindrome ? "palindrome" : "not palindrome"}`);
}
