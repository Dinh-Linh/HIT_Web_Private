const arr = [1, 2, 3, 4, 6, 45, 8];
const arr1 = [6, 7, 8, 9, 12, 23, 4];
arr.forEach(function (x, i) {
    console.table(['i: ${i}', 'x: ${x}']);
})

//Hàm callback truyền vào trả về true hoặc false
const oddArr = arr1.filter(function (x) {
    return x % 2 !== 0;
});
console.log(oddArr);

const check = arr.some(function (x) {
    return x > 0;
});
console.log(check);

//Trả về bất cứ giá tri nào
const a = arr.map(function (x) {
    return {
        so: x,
    };
})

console.log(a);

//reduce(callBackFn, initialValue)
const sum = arr.reduce(function (preVal, curVal, curIdx) {
    console.table([preVal, curVal, curIdx]);
    // return "haha " + curVal;
    return preVal + curVal;
}, 0);
console.log(sum);