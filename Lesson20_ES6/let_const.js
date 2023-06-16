// Let, const

// 1. Var / Let, Const: Scope, Hosting
// 2. Const/ Var, Let: Assignment

// let, const có phạm vi trong 1 khối
if (true){
    const course = 'Java';
    {
        console.log(course);
    }
}
//console.log(course); //lỗi

// Hosting 
a = 1;
var a;
console.log(a);

// Not
// a = 1;
// let a;

//Assignment
const b = 100;
//b = 40  //Error
console.log(b);

// goi thuoc tinh name nen khong anh uong toi const
const user = {
    name: 'pnv',
}
user.name = 'dlnv'
console.log(user);

