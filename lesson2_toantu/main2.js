// Kieu du lieu trong javascript

/*

1. Du lieu nguyen thuy - Primitive Data 
- Tao 1 vung nho luu gia tri
- khong the sua hoac xoa vung nho
- neu gan lai thi se tao vung nho khac 

- Number 
 (var a = 2, var b = 5, var c = 1.5)

- string 
var fullname = "Vu Pham";
var fullname = 'Vu \'Pham'; dau gach cheo dung de chồng chuỗi

- Boolean
var isSuccess = true;
- Truethy 
    + các giá trị là 1 ['BMW'], {name: 'Miu}, 'hi
    + '0'
    + ' '
    + 'false;
    + [] array trống
    + {} một oject trống
    + function(){} (một hàm "trống")
- Falsy
    + false 
    + 0
    + '' or ""
    + underfined
    + NaN
    
document.all chuyển sang boolean sẽ là false
document.all khi là toán hạng của toán tử so sánh == hoặc != sẽ là undefined
Khi typeof document.all sẽ trả về "undefined"
- Undefined 
var age;

- NULL
var isNull = null; // nothing

- Symbol
var id = Symbol('id');

2. Du lieu phuc tap - Complex Data
- Function 
- Object
*/

// var myFunction = function(){
//     alert('Hi xin chao cac ban!');
// }
function myFunction(){
    alert('Hi xin chao cac ban!')
}
myFunction();

// oject 
var myObject = {
    // Key: value,
    name: 'Son Dang',
    age : 18,
    address: 'Ha Noi',
    myFunction: function(){
    },
    school : FPT,
};

console.log ('myObjcet', myObject);

var myArray = [
    'Javascript',
    'PHP',
    'Runy'
];
console.log(myArray);

// check kieu du lieu
console.log(typeof myArray);