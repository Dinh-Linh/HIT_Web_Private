const map = new Map([
    ['a', '1'],
    ['b',
        function () {
            return 1 + 1
        },
    ],
]);
console.log(map.entries());

const set = new Set([1, 2, 3, 3, 2, 1, 2]);
console.log([...set]);


const arr = [1, 2, 3, 4, 5, 6, 7];
function myFillter(arr, condtion) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (condtion(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(myFillter(arr, (x) => x % 2 != 0));

function myMap(arr, res) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(res(arr[i]));
    }
    return newArr;
}

console.log(myMap(arr, (x) => x * 2));

function mySome(arr, res) {
    for (let i = 0; i < arr.length; i++) {
        if (res(arr[i])) return true;
    }
    return false;
}


function myEvery(arr, res) {
    for (let i = 0; i < arr.length; i++) {
        if (!res(arr[i])) return false;
    }
    return true;
}