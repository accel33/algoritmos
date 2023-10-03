// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const newArr = []
    const arr = [...str]
    const arr2 = Array.from(str)
    const arr3 = str.split('')
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
        debugger
    }
    return newArr.join('')
}
// reverse('dcba')

function reverse2(str) {
    const arr = str.split('')
    arr.reverse() // Mutate
    const revStr = arr.join('')
    return revStr
}

function reverse3(str) {
    let reversed = ''
    for (const character of str) {
        reversed = character + reversed
        // 'a'
        // 'p'+'a'
        // 'p'+'pa'
        // 'l'+'ppa'
        // 'e'+'lppa'
    }
    return reversed
}

function reverse4(str) {
    const arrStr = str.split('')
    // reduce((retornoAcumulativo, elementoDelArreglo)=>,'')
    const reverseStr = arrStr.reduce((reverseStr, character) => {
        return character + reverseStr
    }, '')
    return reverseStr
}
console.log(reverse('abcd'));
module.exports = reverse;
