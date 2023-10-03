// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {}
    let max = 0
    let maxChar = ''
    // Ponerlo en un objeto o Map
    for (const char of str) {
        if (!charMap[char]) {
            charMap[char] = 1
        } else {
            charMap[char]++
        }
    }

    for (const char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char]
            maxChar = char
        }
    }
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
