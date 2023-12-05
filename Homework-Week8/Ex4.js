const n = window.prompt("Nhập số nguyên n: ");
let m = 0;
let k = n;
while (k !== 0) {
    let digit = k % 10;
    m = m * 10 + digit;
    k = Math.floor(k / 10); // Tv math.floor là chia nguyên
}

console.log(m);

if (m == n) {
    console.log(true);
}
else {
    console.log(false);
}