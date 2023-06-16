/*
Mảng trong Javascript - Array

1. Tạo mảng 
    - Cách tạo 
    - Sử dụng cách nào ? Tại sao?
    - Kiểm tra data type?
2. Truy xuất mảng 
    - Độ dài mảng 
    - lấy phần tử theo index
*/

var languages = [
    'Javascript',
    'Ruby',
    'PHP',
    null,
    undefined,
    123,
    function () {

    },
];

// var languages = new Array(
//     'Javascript',
//     'Ruby',
//     'PHP',
//     null,
//     undefined,
//     123,
//     function () {

//     },
// );

console.log(typeof languages); // [], {} object 
console.log(Array.isArray(languages));
console.log(languages.length);
console.log(languages[2]);