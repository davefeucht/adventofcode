const binaryCodes = require('./binary_codes.json').codes;

const codeLength = binaryCodes[0].length;
const codeGammaArray = [];
const codeEpsilonArray = [];
let oxygenGeneratorArray = [...binaryCodes];
let co2ScrubberArray = [...binaryCodes];

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

    numZeroes = 0;
    numOnes = 0;
    oxygenGeneratorArray.forEach(code => {
        if (parseInt(code.charAt(i)) === 0) {
            ++numZeroes;
        } else {
            ++numOnes;
        }
    });

    if (numZeroes > numOnes) {
        const tempOxygenArray = oxygenGeneratorArray.filter(tempCode => tempCode.charAt(i) === '0');
        oxygenGeneratorArray = tempOxygenArray.length > 0 ? tempOxygenArray : oxygenGeneratorArray;
    } else {
        const tempOxygenArray = oxygenGeneratorArray.filter(tempCode => tempCode.charAt(i) === '1');
        oxygenGeneratorArray = tempOxygenArray.length > 0 ? tempOxygenArray : oxygenGeneratorArray;
    }

    numZeroes = 0;
    numOnes = 0;
    co2ScrubberArray.forEach(code => {
        if (parseInt(code.charAt(i)) === 0) {
            ++numZeroes;
        } else {
            ++numOnes;
        }
    });

    if (numZeroes > numOnes) {
        const tempCO2Array = co2ScrubberArray.filter(tempCode => tempCode.charAt(i) === '1');
        co2ScrubberArray = tempCO2Array.length > 0 ? tempCO2Array : co2ScrubberArray;
    } else {
        const tempCO2Array = co2ScrubberArray.filter(tempCode => tempCode.charAt(i) === '0');
        co2ScrubberArray = tempCO2Array.length > 0 ? tempCO2Array : co2ScrubberArray;
    }
}

const codeGamma = codeGammaArray.join('');
const codeEpsilon = codeEpsilonArray.join('');

console.log('Gamma: ', codeGamma);
console.log('Epsilon: ', codeEpsilon);
console.log('Multiplied: ', parseInt(codeGamma, 2) * parseInt(codeEpsilon, 2));

console.log('Oxygen: ', oxygenGeneratorArray);
console.log('CO2: ', co2ScrubberArray);
console.log('Multiplied: ', parseInt(oxygenGeneratorArray[0], 2) * parseInt(co2ScrubberArray[0], 2));
