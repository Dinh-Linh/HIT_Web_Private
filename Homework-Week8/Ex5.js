let str = window.prompt("Nhập chuỗi cha: ");
console.log(str);

const a = str.length;
const strChild = window.prompt("Nhập chuỗi con cần chèn; ");
console.log(strChild);

let p = window.prompt("Nhập vị trí chèn; ");
if (p < 0) {
    p = 0;
} else if (p > a) {
    p = a;
}

// Cắt chuỗi
str1 = str.substring(0, p);
const str2 = str.substring(p, a);
console.log(str1);
console.log(str2);
console.log(str1.concat(strChild).concat(str2));

