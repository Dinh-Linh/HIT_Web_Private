let a = window.prompt("Nhập a");
let b = window.prompt("Nhập b");
let c = a * b;

while (a != b) {
    if (a > b) {
        a -= b;
    }
    else {
        b -= a;
    }
}

console.log(a + "\t" + c / a);