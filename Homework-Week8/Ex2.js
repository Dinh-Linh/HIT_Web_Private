let a = window.prompt("Nhâp a =");
let b = window.prompt("Nhập b = ");
let c = window.prompt("Nhập c = ");
if (a + b > c && a + c > b && b + c > a) {
    console.log(true);
}
else console.log(false)