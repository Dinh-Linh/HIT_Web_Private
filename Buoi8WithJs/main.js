var a = "Nguyễn Đình Linh";
let b = 1;
//let, const. Chỉ mỗi var có hositing. Thông thường thì dùng const là chính
// Những th cần thay đổi giá trị thì dùng let. 
//hositing: là hành vi mặc định của JavaScript về việc di chuyển các khai báo lên đầu để compiled hay thực thi code của bạn 
console.log(a);

//String and Template Literals
const s = "Hello everyone"
const k = `Hello
everyone`;
console.log(k);
const n = `${b}${b}`;
console.log(n.length)
console.log(s.length);

const slice = s.slice(2, -5);

const substring = s.substring(2, -5);

console.log(slice);
console.log(substring);

const substr = s.substr(2, 6); // Cắt từ vị trí 2 lấy 6 phần tử
console.log(substr);

console.log(s.replaceAll("e", "E").
    replaceAll("H", "1")); // replace

console.log(a.concat(" Lười học vler"));
console.log(a.replaceAll(/[a-zA-Z]/g, "A"));
//regex

const c = "       dâfwefedfdf fadfsdsdf àdfds"
console.log(c.trim());
console.log(a.padStart(20, "sdaasdas")) // Kiểm tra xem chuỗi đấy đã đủ 20 kí tự chưa. Nếu chưa thì điền thêm string nối đằng sau
//padEnd cũng tương tự thế

const string1 = "1,2,3,4,5,6";
console.log(string1.split(",").reverse().join());

console.log(string1.includes("1"));
console.log(string1.startsWith("1,2,3"));
console.log(string1.indexOf(",", 2))

//Toán tử ba ngồi, logic 
/*switch (key) {
    case value:
        break;

    default:
        break;
}*/

const arr1 = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < 6; i++) {
    console.log(arr1[i]);
}
// for in, for of

const obj = {
    name: "a",
    age: 20,
    getAge: function () {
        return this.age;
    },
};

console.log(obj.getAge());

for (const key in obj) {
    console.log(key);
}