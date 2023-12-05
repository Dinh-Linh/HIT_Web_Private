let str = window.prompt("Nhập mảng kí tự: ");
str = str.trim();
console.log(str);
let count = 0;
function countLastWorld(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] !== " ") {
            count++;
        }
        else {
            return count;
        }
    }
    return count;
}

console.log(countLastWorld(str));
