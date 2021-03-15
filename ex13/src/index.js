Math.floor(Math.random() * (max - min + 1)) + min

function randomRangeNumber(minNumber, maxNumber); {
    return minNumber <= maxNumber
    console.log(randomRangeNumber(minNumber, maxNumber));

}

console.log(randomRangeNumber(10, 100));
randomRangeNumber();
module.exports = randomRangeNumber;