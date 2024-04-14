let variable1: any;
let variable2: unknown;


let a: unknown = 25;
let b: any = "homiedev";
let number7: number = 10;

number7 = a; // TypeScript hiện lỗi,ko thể gán gia tri truc tiep vao kieu number 
number7 = b; // được
a = b; // được
number7 = a as number // duoc
