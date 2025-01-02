/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let sum = BigInt(digits.join("")) + BigInt(1);
    return Array.from(sum.toString()).map(Number);
};