/*
Chuỗi trong javascript

1. Tạo chuỗi 
    - các cách tạo chuỗi 
    - Nên dùng cách nào ? lý do?
    - Kiểm tra data type
2. Một số case sử dụng backslash (\)
3. Xem độ dài chuỗi
4. Chú ý độ dài khi viết code
5. Template string ES6
*/

//1.
var fullName = 'Vu Pham';
//var fullName = new String ('Son Dang');  "object"
console.log(typeof (fullName));


//2.
var fullName = 'Vu Pham la \'sieu nhan\''; // dumg de dong ngoac khi trung voi ngoac syntax
var fullName = "Day la dau \\";
console.log(fullName)

//3.
console.log(fullName.length);

//4. 
var a = 3;
console.log("helllo" + 3); // chuoi noi chuoi 
console.log ("hello", 3); // chuoi va bien 

//5. 
var firstName = 'VU';
var lastName = 'Pham';
console.log('Toi la: '+ firstName + ' ' + lastName);
console.log(`TOi la: ${firstName} ${lastName}`);

