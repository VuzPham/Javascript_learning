/*
Kiểu số (Numer) trong Javascript 

1. Tạo giá trị Number
    - Các cách tạo
    - Dùng cách nào ? Tại sao?
    - Kiểm tra data type
2. Làm việc với Number
    - TO string 
    - To fixed
*/

var age = 18;
var PI = 3.14;

var otherNumber = new Number(9);
console.log(typeof otherNumber); // "Oject"

var result = 20 / 'ABC';
console.log(result); // NaN kieu so khong hop le 
console.log(isNaN(result));

console.log(typeof age.toString());

