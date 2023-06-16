// JSON
// 1. Là một định dạng dữ liệu (chuỗi) 
// Không phải là kiểu dữ liệu
// 2. JavaScript Object Notation
// 3. JSON: Number, string, Boolean, null, Array
// Object 

// Mã hóa / Giải mã 
// Encode / decode 
// Stringify: từ Javascript types -> JSON 
// Parse: từ JSON -> javascript types

// var json = '["PHP", "js"]';
 var json = '{"name":"Son dang", "age":18}';

//var a = '"avc"';
console.log(JSON.parse(json)); // {name: 'Son dang', age: 18}

console.log(JSON.stringify(['java"script', 'PHP'])) // ["java\"script","PHP"]

console.log(JSON.stringify({
    name:'SOn dang',
    age: 16,
    test: function(){}, // {"name":"SOn dang","age":16}
// JSON không hiểu hàm
}));