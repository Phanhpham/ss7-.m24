// giống nhau :void và never đều liên quan đến kết quả của một hàm
 // khác nhau :
 // 1.void 
 // được sử dụng để chỉ ra rằng một hàm không trả về bất kỳ giá trị nào.
 // 2.never:được sử dụng khi một hàm không bao giờ kết thúc hoặc trả về một giá trị.
 // -  thường dùng trong các vòng lặp vô tận tức là
 //các vòng lặp chạy k có điểm dưng để do gtri:

 // vdu void 
 function sayHello():void{
    console.log("hello");
}
sayHello();
function sum(a:number,b:number){
    return a+b
}
console.log(sum(3,5));


// vi du never
function typeNever() {
    let a = 1;
    while (true) {
        console.log("gia tri a", ++a);
    }
}