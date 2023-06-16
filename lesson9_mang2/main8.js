// includes method 

console.log(Array.prototype.includes); // ƒ includes() { [native code] }
console.log(String.prototype.includes); // ƒ includes() { [native code] }
console.log(Number.prototype.includes); //undefined
console.log(Object.prototype.includes); //undefined

var courses = 'Javascript';

// check xem tu JAVA co trong chuoi Javascript khong 
console.log(courses.includes('Java',1)); // false
// 1 la vi tri bat dau check  
// mac dinh la 0
var khoaHoc = ['','Javascript', 'Ruby', 'C++', 'Python'];
console.log(khoaHoc.includes('Ruby',2)); // true 
console.log(khoaHoc.includes('C++',-2)); // true 5 - 2 = 3; 


var a = khoaHoc.includes(); //rong mac dinh la false
console.log(typeof a) //boolean
