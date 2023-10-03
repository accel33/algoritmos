// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome1(str) {
    let reverse = ''
    for (const character of str) {
        reverse = character + reverse
    }
    return str === reverse
}

function palindrome2(str) {
    const reverse = str.split('').reverse().join('')
    return str === reverse
}

function palindrome3(str) {
    const reverse = str.split('').reduce((revAcc, char) => char + revAcc, '')
    return str === reverse
}

function palindromeExplicado(str) {
    const evaluarPrimeroConUltimo = str.split('').every((char, idx) => {
        // let char1 = str[idx] Esto es lo mismo que char
        let char2 = str[str.length - 1 - idx]
        debugger
        return char === char2
    })
    console.log(evaluarPrimeroConUltimo);
    return evaluarPrimeroConUltimo
}

function palindrome4(str) {
    return str.split('').every((char, i) => str[i] === str[str.length - 1 - i])
}
palindromeExplicado('pennep')
module.exports = palindromeExplicado;
