/*
1. element 
2. attribute
3. Text
==: Quy chuẩn của W3C đưa ra 
*/


/*
    -Document là đại diện cả website 
    - khi đọc code html sẽ tạo ra một DOM
    - DOM sẽ lưu hết vào biến document 
    - khi truy cập vào element, attribute, text sẽ phải qua document;
*/

console.log(document);
var boxelement = document.querySelector("div");
console.log(boxelement.id); 
console.log(boxelement.className); 
console.log(boxelement.title); 
document.write('Hello guys!');
