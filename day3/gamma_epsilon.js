const binaryCodes = require('./binary_codes.json').codes;

const codeLength = binaryCodes[0].length;
const codeGammaArray = [];
const codeEpsilonArray = [];

for (let i = 0; i < codeLength; ++i) {
    let numZeroes = 0;
    let numOnes = 0;
    binaryCodes.forEach(code => {
        if (parseInt(code.charAt(i)) === 0) {
            ++numZeroes;
        } else {
            ++numOnes;
        }
    });

    if (numZeroes > numOnes) {
        codeGammaArray.push(0);
        codeEpsilonArray.push(1);
    } else {
        codeGammaArray.push(1);
        codeEpsilonArray.push(0);
    }
}

const codeGamma = codeGammaArray.join('');
const codeEpsilon = codeEpsilonArray.join('');

console.log('Gamma: ', codeGamma);
console.log('Epsilon: ', codeEpsilon);
console.log('Multiplied: ', parseInt(codeGamma, 2) * parseInt(codeEpsilon, 2));
