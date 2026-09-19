const numbers = [4, 8, 2, 11, 6, 7, 10];
console.log("Ex Array:", numbers);
function Maximum(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
const maximum = Maximum(numbers);
console.log("Maximum number:", maximum);

function Sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
const sum = Sum(numbers);
console.log("Sum of all elements:", sum);

const countOddNumbers = function (arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }

    return count;
};
const oddCount = countOddNumbers(numbers);
console.log("Count of odd numbers:", oddCount);