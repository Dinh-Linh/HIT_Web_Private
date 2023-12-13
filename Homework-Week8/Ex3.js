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

const s = "fjnfndf fewfhioj2901u43 fndsjkfnkfw      "
const ss = s.replaceAll(/[0-9] | [^a-zA-Z]/g, " ").trim()
let cnt = 0
for (let i = ss.length - 1; i >= 0; i--) {
    if (ss.charAt(i) === " ") {
        console.log(cnt);
        break;
    }
    cnt++;
}
