// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // const reverse = str.split('').reduce((revAcc, char) => char + revAcc, '')
    // let reverse = ''
    // for (const character of str) {
    //     reverse = character + reverse
    // }
    // const reverse = str.split('').reverse().join('')
    const reverse = str.split('').every((char, idx) => {
        let char1 = char[idx]
        let char2 = str[str.length - 1 - idx]
        let compare = char1 === char2
        debugger
        return char1 === char2
    })
    console.log(reverse);
    return reverse === str
}
palindrome('abcde')
module.exports = palindrome;
