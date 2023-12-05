let max;
let a = window.prompt("Nhập a =");
let b = window.prompt("Nhập b =");
let c = window.prompt("Nhập c =");
if (a > b && a > c) {
    max = a;
}
else if (b > c && b > a) {
    max = b;
}
else {
    max = c;
}
console.log(max);