function findLongestWordLength(str) {
    let arr = str.split(' ');
    let length = 0;
    for (let i = 0; i < arr.length; i++) {
        wordLength = arr[i].length;
        if (wordLength > length) {
            length = wordLength;
        }

    }
    return length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWordLength("May the force be with you"));