// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {}
    let maxNum = 0
    let maxChar = ''
    // Recorrer el String como Array y ponerlo en un Objeto Map
    for (const char of str) { // 'a','b','c','c','c'...
        if (!charMap[char]) { // charMap['a'] = undefined
            charMap[char] = 1 // charMap['a'] = 1
        } else {
            charMap[char]++ // charMap['a'] = 1+1 = 2
        }
    }
    // Recorrer el Objeto Map como Objeto y asignar numero maximo con caracter maximo
    for (const char in charMap) { // {'a':1,'b':1,'c':3}
        if (charMap[char] > maxNum) {
            maxNum = charMap[char]
            maxChar = char
        }
    }
    console.log(charMap);
    return maxChar
}

function maxChar2(str) {
    const charMap = {}
    for (const char of str) {
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
}

module.exports = maxChar;
