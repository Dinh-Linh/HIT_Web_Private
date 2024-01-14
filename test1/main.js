//5
const arr = [0, 0, 1, 10];
const removeZero = (arr) => {
    let i = 0;
    let k = arr.length - 1;
    while (i < k) {
        if (arr[i] == 0) {
            arr.splice(i, 1);
            arr.push(0);
            k--;
        }
        else i++;
    }
    return arr;
};

console.log(removeZero(arr));

//6
const n = 7;
function pascalTriangle(n) {
    const results = [[1]];
    if (n == 1) return results;
    for (let i = 1; i, n; i++) {
        const preRow = results[i - 1];
        const curRow = [1];
        for (let j = 1; j < i; j++) {

        }
    }
}