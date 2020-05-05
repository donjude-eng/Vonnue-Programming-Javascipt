const isVowel = (num) => {

    if (num == "A" || num == "E" || num == "I" || num == "O" || num == "U") {
        result = true;
    }
    else {
        result = false;
    }
    return result;
}
isVowel();
const num = prompt("Enter a word");