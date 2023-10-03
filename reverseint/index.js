// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
function encontrarCeros(cadena) {
}

//Primer Intento
function reverseInt(n) {
    const reverse = []
    let cadena = n.toString()
    console.log(cadena);

    // Si el arreglo tiene 0 para la derecha filtrar. Pero si hay numero luego del cero no.
    encontrarCeros(cadena)

    cadenaSinCero = cadena.split('').filter(ele => ele !== '0')
    console.log(cadenaSinCero);
    let size = cadenaSinCero.length
    let retornar = []
    let esNegativo = cadenaSinCero.find(ele => ele === '-')
    for (let i = size - 1; i > 0; i--) {
        retornar.push(cadenaSinCero[i])
    }
    retornar = retornar.join('') * 1
    console.log(retornar);
    return retornar
}
function reverseInt2(n) {
    const reverse = n
        .toString()
        .split('')
        .reverse()
        .join('')
    // if (n < 0) return reverse * -1
    return parseInt(reverse) * Math.sign(n)
}
reverseInt(-180)
module.exports = reverseInt2;
