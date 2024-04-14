"use strict";
/*

1.array

*/
let numbers = [1, 2, 3, 4];
//khai báo mảng numbers các phần tử trong mang number phải la number 
let students = ["hoa", "hồng", "huệ"];
/*
    2.object

*/
let obj = {
    name: "minh thu",
    address: "ha noi",
    id: 1
};
let obj1 = {
    name: "minh thu",
    address: "hcm",
    id: 15
};
/*
3.ENUM

*/
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
let person = {
    name: "ngọc",
    address: "hn",
    role: 0
};
/**
  4.VOID
  ap dụng với function
  - khi hàm ko trả ve ket qua la j ?
  - khi hàm trả về kêt quả thì phải khai báo kiểu dữ liệu trả ve cua hàm
 */
function sayHello() {
    console.log("hello");
}
sayHello();
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5));
/*
   5.UNKNOW
   tương tự kiểu dữ liệu any nhưng chặt hơn khi dùng
   any thì kiểu dư liệu truyền vào la gì cũng dc
 */
function test(a) {
    console.log(a.toUpperCase());
}
test("text");
function test1(a) {
    // bắt buộc phải kiểm tra kiểu dữ liệu trc khi đi thuc hiên phep tính 
    if (typeof (a) === "string") {
        console.log(a.toUpperCase());
    }
}
test1("text");
/*
    6.type never
    thường dùng trong các vòng lặp vô tận tức là
    các vòng lặp chạy k có điểm dưng để do gtri:
 */
function typeNever() {
    let a = 1;
    while (true) {
        console.log("gia tri a", ++a);
    }
}
//typeNever
